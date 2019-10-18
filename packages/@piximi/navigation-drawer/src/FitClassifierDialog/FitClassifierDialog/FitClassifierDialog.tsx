import {
  Dialog,
  DialogContent,
  DialogContentText,
  Tooltip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Collapse,
  ListItemText
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import * as React from 'react';
import { DialogAppBar } from '../DialogAppBar';
import { DialogTransition } from '../DialogTransition';
import { Form } from '../Form/Form';
import { History } from '../History';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Category, Image } from '@piximi/types';
import * as tensorflow from '@tensorflow/tfjs';
import { useState } from 'react';
import { styles } from './FitClassifierDialog.css';
import { useCollapseList } from '@piximi/hooks';
import {
  createTrainingSet,
  assignToSet,
  setTestsetRatio,
  createAutotunerDataSet
} from './dataset';
import { createModel, createMobileNet } from './networks';
import * as autotuner from '@piximi/autotuner';

const optimizationAlgorithms: { [identifier: string]: any } = {
  adadelta: tensorflow.train.adadelta,
  adam: tensorflow.train.adam,
  adamax: tensorflow.train.adamax,
  rmsprop: tensorflow.train.rmsprop,
  sgd: tensorflow.train.sgd
};

const lossFunctions: { [identifier: string]: any } = {
  absoluteDifference: tensorflow.losses.absoluteDifference,
  cosineDistance: tensorflow.losses.cosineDistance,
  hingeLoss: tensorflow.losses.hingeLoss,
  huberLoss: tensorflow.losses.huberLoss,
  logLoss: tensorflow.losses.logLoss,
  meanSquaredError: tensorflow.losses.meanSquaredError,
  sigmoidCrossEntropy: tensorflow.losses.sigmoidCrossEntropy,
  categoricalCrossentropy: tensorflow.losses.softmaxCrossEntropy
};

// Fisher-Yates Shuffle,
const shuffleImages = (array: Image[]) => {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

const useStyles = makeStyles(styles);

type LossHistory = { x: number; y: number }[];

type FitClassifierDialogProps = {
  categories: Category[];
  setImagesPartition: (partitions: number[]) => void;
  closeDialog: () => void;
  images: Image[];
  openedDialog: boolean;
  openedDrawer: boolean;
  datasetInitialized: boolean;
  setDatasetInitialized: (datasetInitialized: boolean) => void;
};

export const FitClassifierDialog = (props: FitClassifierDialogProps) => {
  const {
    categories,
    closeDialog,
    images,
    openedDialog,
    openedDrawer,
    setImagesPartition,
    datasetInitialized,
    setDatasetInitialized
  } = props;

  const styles = useStyles({});

  // assign each image to train- test- or validation- set
  const initializeDatasets = () => {
    if (datasetInitialized) {
      return;
    }
    var partitions: number[] = [];
    images.forEach((image: Image) => {
      const setItentifier = assignToSet();
      partitions.push(setItentifier);
    });
    setImagesPartition(partitions);
    setDatasetInitialized(true);
  };

  const [datasetSplits, setDatasetSplits] = React.useState([60, 80]);
  const handleChange = (event: any, newValue: any) => {
    setDatasetSplits(newValue);
    setTestsetRatio(datasetSplits[1] - datasetSplits[0]);
  };
  function valuetext(value: any) {
    return `${value}%`;
  }

  const { collapsedList, collapseList } = useCollapseList();
  const [
    collapsedClasssifierSettingsList,
    setCollapsedClasssifierSettingsList
  ] = useState<boolean>(false);
  const onClasssifierSettingsListClick = () => {
    setCollapsedClasssifierSettingsList(!collapsedClasssifierSettingsList);
  };
  const [
    collapsedDatasetSettingsList,
    setCollapsedDatasetSettingsList
  ] = useState<boolean>(false);
  const onDatasetSettingsListClick = () => {
    setCollapsedDatasetSettingsList(!collapsedDatasetSettingsList);
  };

  const [stopTraining, setStopTraining] = useState<boolean>(false);
  const [batchSize, setBatchSize] = useState<number>(32);
  const [epochs, setEpochs] = useState<number>(10);
  const [optimizationAlgorithm, setOptimizationAlgorithm] = useState<string>(
    'adam'
  );
  const [learningRate, setLearningRate] = useState<number>(0.01);
  const [lossFunction, setLossFunction] = useState<string>('meanSquaredError');
  const [inputShape, setInputShape] = useState<string>('224, 224, 3');

  const [trainingLossHistory, setTrainingLossHistory] = useState<LossHistory>(
    []
  );
  const updateLossHistory = (x: number, y: number) => {
    var history = trainingLossHistory;
    history.push({ x, y });
    setTrainingLossHistory(history);
  };

  const [trainingAccuracyHistory, setTrainingAccuracyHistory] = useState<
    LossHistory
  >([]);
  const updateAccuracHistory = (x: number, y: number) => {
    var history = trainingAccuracyHistory;
    history.push({ x, y });
    setTrainingAccuracyHistory(history);
  };

  const [
    trainingValidationAccuracyHistory,
    setTrainingValidationAccuracyHistory
  ] = useState<LossHistory>([]);
  const updateValidationAccuracHistory = (x: number, y: number) => {
    var history = trainingValidationAccuracyHistory;
    history.push({ x, y });
    setTrainingValidationAccuracyHistory(history);
  };

  const [
    trainingValidationLossHistory,
    setTrainingValidationLossHistory
  ] = useState<LossHistory>([]);
  const updateValidationLossHistory = (x: number, y: number) => {
    var history = trainingValidationLossHistory;
    history.push({ x, y });
    setTrainingValidationLossHistory(history);
  };

  const onBatchSizeChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    var value = Number(target.value);

    setBatchSize(value);
  };

  const onEpochsChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    var value = Number(target.value);

    setEpochs(value);
  };

  const onStopTrainingChange = () => {
    setStopTraining(true);
  };

  const resetStopTraining = async () => {
    setStopTraining(false);
  };

  const onInputShapeChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setInputShape(target.value);
  };

  const onLearningRateChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    var value = Number(target.value);

    setLearningRate(value);
  };

  const onLossFunctionChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setLossFunction(target.value);
  };

  const onOptimizationAlgorithmChange = (
    event: React.FormEvent<EventTarget>
  ) => {
    const target = event.target as HTMLInputElement;

    setOptimizationAlgorithm(target.value);
  };

  const className = classNames(styles.content, styles.contentLeft, {
    [styles.contentShift]: openedDrawer,
    [styles.contentShiftLeft]: openedDrawer
  });

  const classes = {
    paper: styles.paper
  };

  const fit = async (labledData: Image[]) => {
    const numberOfClasses: number = categories.length - 1;
    if (numberOfClasses === 1) {
      alert('The classifier must have at least two classes!');
      return;
    }

    const model = await createModel(numberOfClasses);

    model.compile({
      loss: lossFunctions[lossFunction],
      metrics: ['accuracy'],
      optimizer: optimizationAlgorithms[optimizationAlgorithm](learningRate)
    });

    var counter = 0;

    const args = {
      epochs: epochs,
      shuffle: true,
      validationSplit: 1 - datasetSplits[1] / 100,
      callbacks: {
        onEpochEnd: async (
          epoch: number,
          logs?: tensorflow.Logs | undefined
        ) => {
          if (logs) {
            updateLossHistory(counter, logs.loss);
            updateAccuracHistory(counter, logs.acc);
            updateValidationAccuracHistory(counter, logs.val_acc);
            updateValidationLossHistory(counter, logs.val_loss);
            counter++;
          }
          if (stopTraining) {
            model.stopTraining = true;
          }
        }
      }
    };

    // train network in batches, reduce memory usage
    var training = true;
    var i = 0;
    while (training) {
      var startBatchIndex = i * batchSize;
      var endBatchIndex = (i + 1) * batchSize - 1;
      if (endBatchIndex > labledData.length) {
        var batchData = labledData.slice(startBatchIndex);
        training = false;
      } else {
        var batchData = labledData.slice(startBatchIndex, endBatchIndex);
      }
      const trainingSet = await createTrainingSet(categories, batchData, 2);
      const trainData = trainingSet.data;
      const trainLables = trainingSet.lables;
      const history = await model.fit(trainData, trainLables, args);
      trainData.dispose();
      trainLables.dispose();
      i++;
    }

    console.log('finished, saving the model');

    await model.save('indexeddb://mobilenet');
  };

  const onFit = async () => {
    const labledData = images.filter((image: Image) => {
      return (
        image.categoryIdentifier !== '00000000-0000-0000-0000-000000000000'
      );
    });
    initializeDatasets();
    resetStopTraining();
    fit(shuffleImages(labledData)).then(() => {});
  };

  enum LossFunction {
    'absoluteDifference',
    'cosineDistance',
    'hingeLoss',
    'huberLoss',
    'logLoss',
    'meanSquaredError',
    'sigmoidCrossEntropy',
    'softmaxCrossEntropy',
    'categoricalCrossentropy'
  }
  const onParameterTuning = async () => {
    const numberOfClasses: number = categories.length - 1;
    const labledData = images.filter((image: Image) => {
      return (
        image.categoryIdentifier !== '00000000-0000-0000-0000-000000000000'
      );
    });
    const trainingSet = await createAutotunerDataSet(
      categories,
      labledData,
      numberOfClasses
    );

    var tensorflowlModelAutotuner = new autotuner.TensorflowlModelAutotuner(
      ['accuracy'],
      trainingSet,
      numberOfClasses
    );

    const model = await createModel(numberOfClasses);

    var optimizers = [
      tensorflow.train.adadelta(learningRate),
      tensorflow.train.adam(learningRate),
      tensorflow.train.adamax(learningRate),
      tensorflow.train.rmsprop(learningRate),
      tensorflow.train.sgd(learningRate)
    ];
    var losses = [
      LossFunction.absoluteDifference,
      LossFunction.categoricalCrossentropy,
      LossFunction.cosineDistance,
      LossFunction.meanSquaredError,
      LossFunction.sigmoidCrossEntropy,
      LossFunction.softmaxCrossEntropy
    ];

    const parameters = {
      lossfunction: losses,
      optimizerAlgorithm: optimizers,
      batchSize: [15],
      epochs: [5, 10, 12, 15, 20]
    };
    tensorflowlModelAutotuner.addModel('testModel', model, parameters);

    // tune the hyperparameters
    await tensorflowlModelAutotuner.bayesianOptimization('accuracy');
  };

  return (
    <Dialog
      className={className}
      classes={classes}
      disableBackdropClick
      disableEscapeKeyDown
      fullScreen
      onClose={closeDialog}
      open={openedDialog}
      TransitionComponent={DialogTransition}
      style={{ zIndex: 1203 }}
    >
      <DialogAppBar
        onStopTrainingChange={onStopTrainingChange}
        closeDialog={closeDialog}
        fit={onFit}
        openedDrawer={openedDrawer}
      />

      <DialogContent>
        <List dense>
          <ListItem
            button
            onClick={onClasssifierSettingsListClick}
            style={{ padding: '12px 0px' }}
          >
            <ListItemIcon>
              {collapsedClasssifierSettingsList ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </ListItemIcon>

            <ListItemText
              primary="Classifier Settings"
              style={{ fontSize: '20px' }}
            />
          </ListItem>

          <Collapse
            in={collapsedClasssifierSettingsList}
            timeout="auto"
            unmountOnExit
          >
            <Tooltip title="Tune parameters" placement="bottom">
              <Button
                variant="contained"
                color="primary"
                onClick={onParameterTuning}
              >
                Tune parameters
              </Button>
            </Tooltip>

            <Form
              batchSize={batchSize}
              closeDialog={closeDialog}
              epochs={epochs}
              inputShape={inputShape}
              learningRate={learningRate}
              lossFunction={lossFunction}
              onBatchSizeChange={onBatchSizeChange}
              onEpochsChange={onEpochsChange}
              onInputShapeChange={onInputShapeChange}
              onLearningRateChange={onLearningRateChange}
              onLossFunctionChange={onLossFunctionChange}
              onOptimizationAlgorithmChange={onOptimizationAlgorithmChange}
              openedDialog={openedDialog}
              optimizationAlgorithm={optimizationAlgorithm}
            />
          </Collapse>

          <ListItem
            button
            onClick={onDatasetSettingsListClick}
            style={{ padding: '12px 0px' }}
          >
            <ListItemIcon>
              {collapsedDatasetSettingsList ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </ListItemIcon>

            <ListItemText
              primary="Dataset Settings"
              style={{ fontSize: '1em' }}
            />
          </ListItem>

          <Collapse
            in={collapsedDatasetSettingsList}
            timeout="auto"
            unmountOnExit
          >
            <Tooltip title="Initialize dataset" placement="bottom">
              <Button
                variant="contained"
                color="primary"
                onClick={initializeDatasets}
              >
                Initialize Dataset
              </Button>
            </Tooltip>

            <div style={{ padding: '12px 0px', width: '300' }}>
              <Typography id="range-slider" gutterBottom>
                Dataset Splits
              </Typography>
              <Slider
                value={datasetSplits}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
              />
            </div>
          </Collapse>
        </List>
        <DialogContentText>Training history:</DialogContentText>

        <History
          lossData={trainingLossHistory}
          validationAccuracyData={trainingValidationLossHistory}
          accuracyData={trainingAccuracyHistory}
          validationLossData={trainingValidationAccuracyHistory}
        />
      </DialogContent>
    </Dialog>
  );
};
