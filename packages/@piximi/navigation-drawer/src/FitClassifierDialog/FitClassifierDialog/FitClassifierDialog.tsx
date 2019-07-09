import { Dialog, DialogContent } from '@material-ui/core';
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
import { createModel, createTrainAndTestSet } from '@piximi/models';

const useStyles = makeStyles(styles);

type LossHistory = { x: number; y: number }[];

type FitClassifierDialogProps = {
  categories: Category[];
  closeDialog: () => void;
  images: Image[];
  openedDialog: boolean;
  openedDrawer: boolean;
};

export const FitClassifierDialog = (props: FitClassifierDialogProps) => {
  const { categories, closeDialog, images, openedDialog, openedDrawer } = props;

  const styles = useStyles({});

  const [stopTraining, setStopTraining] = useState<boolean>(false);
  const [batchSize, setBatchSize] = useState<number>(32);
  const [epochs, setEpochs] = useState<number>(10);
  const [optimizationAlgorithm, setOptimizationAlgorithm] = useState<
    tensorflow.Optimizer
  >(tensorflow.train.adam);
  const [learningRate, setLearningRate] = useState<number>(0.01);
  const [lossFunction, setLossFunction] = useState<string>(
    'categoricalCrossentropy'
  );
  const [inputShape, setInputShape] = useState<string>('224, 224, 3');
  const [trainingLossHistory, setTrainingLossHistory] = useState<LossHistory>([
    { x: 0, y: 0 }
  ]);

  const [trainingAccuracyHistory, setTrainingAccuracyHistory] = useState<
    number[]
  >([]);

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
    console.log('reset stop');
    await setStopTraining(false);
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
    //const value = target.value as tensorflow.Optimizer;
    const value = tensorflow.train.adam;

    setOptimizationAlgorithm(value(0.1));
  };

  const className = classNames(styles.content, styles.contentLeft, {
    [styles.contentShift]: openedDrawer,
    [styles.contentShiftLeft]: openedDrawer
  });

  const classes = {
    paper: styles.paper
  };

  const fit = async () => {
    const numberOfClasses: number = categories.length - 1;
    if (numberOfClasses === 1) {
      alert('The classifier must have at least two classes!');
      return;
    }

    await resetStopTraining();

    const model = await createModel(
      numberOfClasses,
      100,
      lossFunction,
      ['accuracy'],
      tensorflow.train.adam(learningRate)
    );

    const { trainData, testData } = await createTrainAndTestSet(
      categories,
      images
    );

    const x = trainData.data;
    const y = trainData.lables;

    const args = {
      batchSize: batchSize,
      callbacks: {
        onEpochEnd: async (
          epoch: number,
          logs?: tensorflow.Logs | undefined
        ) => {
          if (logs) {
            console.log(`onEpochEnd ${epoch}, loss: ${logs.loss}`);
          }
          if (stopTraining) {
            console.log('test train stop');
            model.stopTraining = true;
          }
        },
        onBatchEnd: async (
          batch: number,
          logs?: tensorflow.Logs | undefined
        ) => {
          setTrainingLossHistory([
            ...trainingLossHistory,
            { x: batch, y: logs!.loss }
          ]);
        }
      },
      epochs: epochs
    };

    const history = await model.fit(x, y, args);

    await model.save('indexeddb://mobilenet');
  };

  const onFit = async () => {
    const startTime = new Date().getTime();

    await fit().then(() => {});

    const endTime = new Date().getTime();
    const seconds = Math.round((endTime - startTime) / 1000); //in seconds
    console.log(seconds + ' seconds');
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
      style={{ zIndex: 1100 }}
    >
      <DialogAppBar
        onStopTrainingChange={onStopTrainingChange}
        closeDialog={closeDialog}
        fit={onFit}
        openedDrawer={openedDrawer}
      />

      <DialogContent>
        <History data={trainingLossHistory} />

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
      </DialogContent>
    </Dialog>
  );
};
