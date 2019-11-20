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
  ListItemText,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import * as React from 'react';
import { DialogAppBar } from '../DialogAppBar';
import { DialogTransition } from '../DialogTransition';
import { Form } from '../Form/Form';
import { RescalingForm } from '../RescalingForm/RescalingForm';
import { History } from '../History';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { Category } from '@piximi/types';
import * as tensorflow from '@tensorflow/tfjs';
import { useState, useEffect } from 'react';
import { styles } from './FitClassifierDialog.css';
import { useCollapseList } from '@piximi/hooks';
import {
  createTrainingSet,
  assignToSet,
  setTestsetRatio,
  createAutotunerDataSet
} from './dataset';
import { rescaleData, resizeData, augmentData } from './preprocessing';
import { createModel, createMobileNet } from './networks';

// additional stuff to test
import * as tf from '@tensorflow/tfjs';
import * as seedrandom from 'seedrandom';
import { assertTypesMatch } from '@tensorflow/tfjs-core/dist/tensor_util';
import * as tm from '@teachablemachine/image';

const SEED_WORD = 'testSuite';
const seed: seedrandom.prng = seedrandom(SEED_WORD);

// @ts-ignore
var Table = require('cli-table');

const BEAN_DATASET_URL =
  'https://storage.googleapis.com/teachable-machine-models/test_data/image/beans/';

const FLOWER_DATASET_URL =
  'https://storage.googleapis.com/teachable-machine-models/test_data/image/flowers_all/';

function loadPngImage(
  c: string,
  i: number,
  dataset_url: string
): Promise<HTMLImageElement> {
  // tslint:disable-next-line:max-line-length
  const src = dataset_url + `${c}/${i}.png`;

  // console.log(src)
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.crossOrigin = 'anonymous';
    img.src = src;
  });
}

/**
 * Load a flower image from our storage bucket
 */
function loadJpgImage(
  c: string,
  i: number,
  dataset_url: string
): Promise<HTMLImageElement> {
  // tslint:disable-next-line:max-line-length
  const src = dataset_url + `${c}/${i}.jpg`;
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.crossOrigin = 'anonymous';
    img.src = src;
  });
}

/**
 * Create train/validation dataset and test dataset with unique images
 */
async function createDatasets(
  dataset_url: string,
  classes: string[],
  trainSize: number,
  testSize: number,
  loadFunction: Function
) {
  // fill in an array with unique numbers
  let listNumbers = [];
  for (let i = 0; i < trainSize + testSize; ++i) listNumbers[i] = i;
  listNumbers = fisherYates(listNumbers, seed); // shuffle

  const trainAndValidationIndeces = listNumbers.slice(0, trainSize);
  const testIndices = listNumbers.slice(trainSize, trainSize + testSize);

  const trainAndValidationImages: HTMLImageElement[][] = [];
  const testImages: HTMLImageElement[][] = [];

  for (const c of classes) {
    let load: Array<Promise<HTMLImageElement>> = [];
    for (const i of trainAndValidationIndeces) {
      load.push(loadFunction(c, i, dataset_url));
    }
    trainAndValidationImages.push(await Promise.all(load));

    load = [];
    for (const i of testIndices) {
      load.push(loadFunction(c, i, dataset_url));
    }
    testImages.push(await Promise.all(load));
  }

  return {
    trainAndValidationImages,
    testImages
  };
}

/**
 * Shuffle an array of Float32Array or Samples using Fisher-Yates algorithm
 * Takes an optional seed value to make shuffling predictable
 */
function fisherYates(array: number[], seed?: seedrandom.prng) {
  const length = array.length;
  const shuffled = array.slice(0);
  for (let i = length - 1; i > 0; i -= 1) {
    let randomIndex;
    if (seed) {
      randomIndex = Math.floor(seed() * (i + 1));
    } else {
      randomIndex = Math.floor(Math.random() * (i + 1));
    }
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }
  return shuffled;
}

/**
 * Output loss and accuracy results at the end of training
 * Also evaluate the test dataset
 */
function showMetrics(
  alpha: number,
  time: number,
  logs: tf.Logs[],
  testAccuracy?: number
) {
  const lastEpoch = logs[logs.length - 1];

  const header = 'α=' + alpha + ', t=' + (time / 1000).toFixed(1) + 's';

  const table = new Table({
    head: [header, 'Accuracy', 'Loss'],
    colWidths: [18, 10, 10]
  });

  table.push(
    ['Train', lastEpoch.acc.toFixed(3), lastEpoch.loss.toFixed(5)],
    ['Validation', lastEpoch.val_acc.toFixed(3), lastEpoch.val_loss.toFixed(5)]
  );
  console.log('\n' + table.toString());
}

async function testModel(
  model: any,
  alpha: number,
  classes: string[],
  trainAndValidationImages: HTMLImageElement[][],
  testImages: HTMLImageElement[][],
  testSizePerClass: number,
  epochs: number,
  learningRate: number,
  showEpochResults: boolean = false,
  earlyStopEpoch: number = epochs
) {
  model.setLabels(classes);
  model.setSeed(SEED_WORD); // set a seed to shuffle predictably

  const logs: tf.Logs[] = [];
  let time: number = 0;

  await tf.nextFrame().then(async () => {
    let index = 0;
    for (const imgSet of trainAndValidationImages) {
      for (const img of imgSet) {
        await model.addExample(index, img);
      }
      index++;
    }
    const start = window.performance.now();
    await model.train(
      {
        denseUnits: 100,
        epochs,
        learningRate,
        batchSize: 16
      },
      {
        onEpochBegin: async (epoch: number, logs: tf.Logs) => {
          if (showEpochResults) {
            console.log('Epoch: ', epoch);
          }
        },
        onEpochEnd: async (epoch: number, log: tf.Logs) => {
          if (showEpochResults) {
            console.log(log);
          }
          if (earlyStopEpoch !== epochs && earlyStopEpoch === epoch) {
            model.stopTraining().then(() => {
              console.log('Stopped training early');
            });
          }
          logs.push(log);
        }
      }
    );
    const end = window.performance.now();
    time = end - start;
  });

  // // Analyze the test set (model has not seen for training)
  // let accuracy = 0;
  // for (let i = 0; i < classes.length; i++) {
  // 	const classImages = testImages[i];

  // 	for (const image of classImages) {
  // 		const scores = await model.predict(image, false);
  // 		// compare the label
  // 		if (scores[0].className === classes[i]) {
  // 			accuracy++;
  // 		}
  // 	}
  // }
  // const testAccuracy = accuracy / (testSizePerClass * classes.length);

  showMetrics(alpha, time, logs);
  return logs[logs.length - 1];
}

async function testMobilenet(
  dataset_url: string,
  version: number,
  loadFunction: Function,
  maxImages: number = 200,
  earlyStop: boolean = false
) {
  // classes, samplesPerClass, url
  const metadata = await (await fetch(dataset_url + 'metadata.json')).json();
  // 1. Setup dataset parameters
  const classLabels = metadata.classes as string[];

  let NUM_IMAGE_PER_CLASS = Math.ceil(maxImages / classLabels.length);

  if (NUM_IMAGE_PER_CLASS > Math.min(...metadata.samplesPerClass)) {
    NUM_IMAGE_PER_CLASS = Math.min(...metadata.samplesPerClass);
  }
  const TRAIN_VALIDATION_SIZE_PER_CLASS = NUM_IMAGE_PER_CLASS;

  const table = new Table();
  table.push({
    'train/validation size':
      TRAIN_VALIDATION_SIZE_PER_CLASS * classLabels.length
  });
  console.log('\n' + table.toString());

  // 2. Create our datasets once
  const datasets = await createDatasets(
    dataset_url,
    classLabels,
    TRAIN_VALIDATION_SIZE_PER_CLASS,
    0,
    loadFunction
  );
  const trainAndValidationImages = datasets.trainAndValidationImages;
  const testImages = datasets.testImages;

  // NOTE: If testing time, test first model twice because it takes longer
  // to train the very first time tf.js is training

  const MOBILENET_VERSION = version;
  let VALID_ALPHAS = [0.35];
  // const VALID_ALPHAS = [0.25, 0.5, 0.75, 1];
  // const VALID_ALPHAS = [0.4];
  let EPOCHS = 50;
  let LEARNING_RATE = 0.001;
  if (version === 1) {
    LEARNING_RATE = 0.0001;
    VALID_ALPHAS = [0.25];
    EPOCHS = 20;
  }

  const earlyStopEpochs = earlyStop ? 5 : EPOCHS;

  for (let a of VALID_ALPHAS) {
    const lineStart = '\n//====================================';
    const lineEnd = '====================================//\n\n';
    console.log(lineStart);
    // 3. Test data on the model
    const teachableMobileNetV2 = await tm.createTeachable(
      { tfjsVersion: tf.version.tfjs },
      { version: MOBILENET_VERSION, alpha: a }
    );

    const lastEpoch = await testModel(
      teachableMobileNetV2,
      a,
      classLabels,
      trainAndValidationImages,
      testImages,
      0,
      EPOCHS,
      LEARNING_RATE,
      false,
      earlyStopEpochs
    );

    // assert.isTrue(accuracyV2 > 0.7);
    console.log(lineEnd);

    return { model: teachableMobileNetV2, lastEpoch };
  }
}

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

  const [src, setSrc] = useState(images[0].data);

  const [example, setExample] = useState<ImageJS.Image>(new ImageJS.Image());

  const openImage = async () => {
    console.log(src);

    const image = await ImageJS.Image.load(src);

    setExample(image);
  };

  useEffect(() => {
    console.log('foo');

    openImage();

    console.log(example.getHistograms());
  });

  // const example = ImageJS.Image.load(images[0]);

  // example.data

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

  // Preprocessing clicks

  const [paddingOption1, setPaddingOption1] = React.useState<boolean>(false);
  const onPaddingOption1Click = () => {
    setPaddingOption1(!paddingOption1);
  };

  const [paddingOption2, setPaddingOption2] = React.useState<boolean>(false);
  const onpaddingOption2Click = () => {
    setPaddingOption2(!paddingOption2);
  };

  const [dataAugmentation, setDataAugmentation] = React.useState<boolean>(
    false
  );
  const onDataAugmentationClick = () => {
    setDataAugmentation(!dataAugmentation);
  };

  const [lowerPercentile, setLowerPercentile] = React.useState<number>(0);
  const onLowerPercentileChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    var value = Number(target.value);
    setLowerPercentile(value);
  };

  const [upperPercentile, setUpperPercentile] = React.useState<number>(1);
  const onUpperPercentileChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    var value = Number(target.value);
    setUpperPercentile(value);
  };

  const [collapsedPreprocessingList, setCollapsedPreprocessingList] = useState<
    boolean
  >(false);
  const onPreprocessingListClick = () => {
    // shows or hides preprocessing list in interface
    setCollapsedPreprocessingList(!collapsedPreprocessingList);
  };

  const onPreprocessingClick = async () => {
    //does actual preprocessing upon clicking button
    // Skeleton
    const rescaledSet = await rescaleData(
      lowerPercentile,
      upperPercentile,
      labledData
    );
    const resizedSet = await resizeData(
      paddingOption1,
      paddingOption2,
      rescaledSet
    );
    const augmentedSet = await augmentData(dataAugmentation, resizedSet);
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
  const [trainStatus, setTrainStatus] = useState<string>('meanSquaredError');
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

  // TEMPORARY: load images locally for debugging

  // let src: string = 'https://picsum.photos/256/256';
  // const [channels, setChannels] = useState({ r: true, g: true, b: true });
  // const [intensityRange, setIntensityRange] = useState([0.0, 1.0]);

  // const [image, setImage] = useState<Image>(new Image());

  // const openImage = async () => {
  // const image = await JsImage.Image.load(src);

  // const [minimum, maximum] = intensityRange;

  // const rescaled = image.multiply(maximum - minimum);

  // setImage(rescaled);

  // setImage(rescaled);
  // };

  // // calculate and add up histograms of every image in data set

  // const computeHistogram = async (labledData: Image[]) => {

  //   var computing = true;
  //   var i = 0;
  //   var batchSize = 1;
  //   let histogramInputImage: HTMLImageElement | HTMLCanvasElement ;
  //   let histogramChannel1 : number[] = [];
  //   let histogramChannel2 : number[] = [];
  //   let histogramChannel3 : number[] = [];
  //   while (computing) {
  //     var startBatchIndex = i * batchSize;
  //     var endBatchIndex = (i + 1) * batchSize - 1;
  //     if (endBatchIndex > labledData.length) {
  //       var batchData = labledData.slice(startBatchIndex);
  //       computing = false;
  //     } else {
  //       var batchData = labledData.slice(startBatchIndex, endBatchIndex);
  //     }
  //     console.log(batchData);
  //     const tmp = await ImageJS.Image.load(batchData[0].data);
  //     histogramInputImage = tmp.getCanvas();

  //     histogramChannel1 += histogramInputImage.getHistogram({
  //       channel: 1
  //     });
  //     histogramChannel2 += histogramInputImage.getHistogram({
  //       channel: 2
  //     });
  //     histogramChannel3 += histogramInputImage.getHistogram({
  //       channel: 3
  //     });
  //     // const HistogramData = batchData.data;
  //     i++;
  //   }

  //   console.log('finished');

  // };

  const fit = async (labledData: Image[]) => {
    const numberOfClasses: number = categories.length - 1;
    if (numberOfClasses === 1) {
      alert('The classifier must have at least two classes!');
      return;
    }

    const model = await createModel(numberOfClasses);

    const validationSplit = 1 - datasetSplits[1] / 100;

    model.compile({
      loss: lossFunctions[lossFunction],
      metrics: ['accuracy'],
      optimizer: optimizationAlgorithms[optimizationAlgorithm](learningRate)
    });

    // We'll keep a buffer of loss and accuracy values over time.
    let trainBatchCount = 0;

    // const trainData = data.getTrainData();
    // const testData = data.getTestData();
    const trainData = await createTrainingSet(
      categories,
      labledData,
      numberOfClasses
    );

    const totalNumBatches =
      Math.ceil((trainData.data.shape[0] * (1 - validationSplit)) / batchSize) *
      epochs;

    // During the long-running fit() call for model training, we include
    // callbacks, so that we can plot the loss and accuracy values in the page
    // as the training progresses.
    let valAcc;
    await model.fit(trainData.data, trainData.labels, {
      batchSize,
      validationSplit,
      epochs: epochs,
      callbacks: {
        onBatchEnd: async (batch, logs) => {
          trainBatchCount++;
          setTrainStatus(
            `Training... (` +
              `${((trainBatchCount / totalNumBatches) * 100).toFixed(1)}%` +
              ` complete). To stop training, refresh or close page.`
          );
          if (stopTraining) {
            model.stopTraining = true;
          }
          console.log(trainBatchCount);
          // ui.plotLoss(trainBatchCount, logs!.loss, 'train');
          // ui.plotAccuracy(trainBatchCount, logs!.acc, 'train');
          // if (onIteration && batch % 10 === 0) {
          //   onIteration('onBatchEnd', batch, logs);
          // }
          updateLossHistory(trainBatchCount, logs!.loss);
          updateAccuracHistory(trainBatchCount, logs!.acc);
          // updateValidationAccuracHistory(trainBatchCount, logs.val_acc);
          // updateValidationLossHistory(trainBatchCount, logs.val_loss);
          await tensorflow.nextFrame();
        },
        onEpochEnd: async (epoch, logs) => {
          valAcc = logs!.val_acc;
          // ui.plotLoss(trainBatchCount, logs!.val_loss, 'validation');
          // ui.plotAccuracy(trainBatchCount, logs!.val_acc, 'validation');
          // if (onIteration) {
          //   onIteration('onEpochEnd', epoch, logs);
          // }
          await tensorflow.nextFrame();
        }
      }
    });

    trainData.data.dispose();
    trainData.labels.dispose();

    // const testResult = model.evaluate(testData.xs, testData.labels);
    // const testAccPercent = testResult[1].dataSync()[0] * 100;
    // const finalValAccPercent = valAcc * 100;
    // ui.logStatus(
    //     `Final validation accuracy: ${finalValAccPercent.toFixed(1)}%; ` +
    //     `Final test accuracy: ${testAccPercent.toFixed(1)}%`);

    console.log('finished, saving the model');
    await model.save('indexeddb://mobilenet');
  };

  const onFit = async () => {
    // testMobilenet(BEAN_DATASET_URL, 2, loadPngImage);
    testMobilenet(FLOWER_DATASET_URL, 1, loadJpgImage);
  };

  enum LossFunction {
    'absoluteDifference',
    'cosineDistance',
    'hingeLoss',
    'huberLoss',
    'logLoss',
    'meanSquaredError',
    'sigmoidCrossEntropy',
    'categoricalCrossentropy'
  }
  const onParameterTuning = async () => {
    // const numberOfClasses: number = categories.length - 1;
    // const labledData = images.filter((image: Image) => {
    //   return (
    //     image.categoryIdentifier !== '00000000-0000-0000-0000-000000000000'
    //   );
    // });
    // const trainingSet = await createAutotunerDataSet(categories, labledData);
    // var tensorflowlModelAutotuner = new autotuner.TensorflowlModelAutotuner(
    //   ['accuracy'],
    //   trainingSet,
    //   numberOfClasses
    // );
    // const model = await createModel(numberOfClasses);
    // var optimizers = [
    //   tensorflow.train.adadelta(learningRate),
    //   tensorflow.train.adam(learningRate),
    //   tensorflow.train.adamax(learningRate),
    //   tensorflow.train.rmsprop(learningRate),
    //   tensorflow.train.sgd(learningRate)
    // ];
    // var losses = [
    //   LossFunction.absoluteDifference,
    //   LossFunction.categoricalCrossentropy,
    //   LossFunction.cosineDistance,
    //   LossFunction.meanSquaredError,
    //   LossFunction.sigmoidCrossEntropy,
    //   LossFunction.categoricalCrossentropy
    // ];
    // const parameters = {
    //   lossfunction: losses,
    //   optimizerAlgorithm: optimizers,
    //   batchSize: [15],
    //   epochs: [5, 10, 12, 15, 20]
    // };
    // tensorflowlModelAutotuner.addModel('testModel', model, parameters);
    // // tune the hyperparameters
    // const params = await tensorflowlModelAutotuner.bayesianOptimization(
    //   'accuracy'
    // );
    // setBatchSize(params['batchSize']);
    // setEpochs(params['epochs']);
    // setLossFunction(LossFunction[params['lossFunction']] as string);
    // const optimizer = Object.keys(optimizationAlgorithms)[
    //   params['optimizerFunction']
    // ];
    // setOptimizationAlgorithm(optimizer);
  };

  // specifies interface
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
            onClick={onPreprocessingListClick}
            style={{ padding: '12px 0px' }}
          >
            <ListItemIcon>
              {collapsedPreprocessingList ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </ListItemIcon>

            <ListItemText primary="Preprocessing" style={{ fontSize: '1em' }} />
          </ListItem>

          <Collapse
            in={collapsedPreprocessingList}
            timeout="auto"
            unmountOnExit
          >
            <Tooltip title="Apply Preprocessing Settings" placement="bottom">
              <Button
                variant="contained"
                color="primary"
                onClick={onPreprocessingClick}
              >
                Apply Preprocessing
              </Button>
            </Tooltip>
            <Typography id="rescaling" gutterBottom>
              Pixel Intensity Rescaling
            </Typography>
            <RescalingForm
              onLowerPercentileChange={onLowerPercentileChange}
              onUpperPercentileChange={onUpperPercentileChange}
              lowerPercentile={lowerPercentile}
              upperPercentile={upperPercentile}
              closeDialog={closeDialog}
              openedDialog={openedDialog}
            />
            <Typography id="augmentation" gutterBottom>
              Data Augmentation
            </Typography>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox value="randomDataAugmentation" />}
                label="Random Data Augmentation"
              ></FormControlLabel>
            </FormGroup>
            <Typography id="resizing" gutterBottom>
              Resizing
            </Typography>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox value="paddingOption1" />}
                label="Padding Option 1"
              ></FormControlLabel>
            </FormGroup>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox value="paddingOption2" />}
                label="Padding Option 2"
              ></FormControlLabel>
            </FormGroup>
          </Collapse>

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
                Tune parameters NEW 1
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
              // onDataAugmentationChange={onDataAugmentationChange}
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
          status={status}
          lossData={trainingLossHistory}
          validationAccuracyData={trainingValidationLossHistory}
          accuracyData={trainingAccuracyHistory}
          validationLossData={trainingValidationAccuracyHistory}
        />
      </DialogContent>
    </Dialog>
  );
};
