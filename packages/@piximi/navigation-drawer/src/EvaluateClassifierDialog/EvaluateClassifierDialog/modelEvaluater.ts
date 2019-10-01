import * as tensorflow from '@tensorflow/tfjs';
import * as math from 'mathjs';

export const evaluateTensorflowModel = (
  model: tensorflow.LayersModel,
  evaluationData: tensorflow.Tensor<tensorflow.Rank>[],
  labels: number[],
  numberOfClasses: number
) => {
  return returnResult(model, evaluationData, labels, numberOfClasses);
};

export const evaluateTensorflowModelCV = async (
  model: tensorflow.LayersModel,
  evaluationData: tensorflow.Tensor<tensorflow.Rank>[],
  labels: number[],
  numberOfClasses: number
) => {
  const dataSize = evaluationData.length;
  console.log(dataSize);
  const k = math.min(10, math.ceil(math.nthRoot(dataSize) as number));
  console.log(k);

  const dataFolds = Array.from(
    Array(math.ceil(evaluationData.length / k)),
    (_, i) => evaluationData.slice(i * k, i * k + k)
  );
  const labelFolds = Array.from(Array(math.ceil(labels.length / k)), (_, i) =>
    labels.slice(i * k, i * k + k)
  );

  model.compile({
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
    optimizer: tensorflow.train.adam()
  });

  var accuracy = 0;
  var crossEntropy = 0;
  var confusionMatrixArray: any = Array(numberOfClasses);
  for (let i = 0; i < k; i++) {
    var validationData: tensorflow.Tensor<tensorflow.Rank>[] = dataFolds[i];
    var trainData: tensorflow.Tensor<tensorflow.Rank>[] = [];

    var validationLabels: number[] = labelFolds[i];
    var trainLabels: number[] = [];

    for (var j = 0; j < k; j++) {
      if (j !== i) {
        trainData = trainData.concat(dataFolds[j]);
      }
    }

    let concatenatedTensorData = tensorflow.tidy(() =>
      tensorflow.concat(trainData)
    );
    let concatenatedLabelData = tensorflow.tidy(() =>
      tensorflow.oneHot(trainLabels, numberOfClasses)
    );
    await model.fit(concatenatedTensorData, concatenatedLabelData);

    var evaluationResult = returnResult(
      model,
      validationData,
      validationLabels,
      numberOfClasses
    );
    crossEntropy += evaluationResult.crossEntropy;
    accuracy += evaluationResult.accuracy;
    confusionMatrixArray += evaluationResult.confusionMatrixArray;
  }
  return {
    accuracy: accuracy / k,
    crossEntropy: crossEntropy / k,
    confusionMatrixArray: confusionMatrixArray / k
  };
};

const returnResult = (
  model: tensorflow.LayersModel,
  evaluationData: tensorflow.Tensor<tensorflow.Rank>[],
  labels: number[],
  numberOfClasses: number
) => {
  var predictions: any = [];
  for (let i: number = 0; i < evaluationData.length; i++) {
    var prediction = model.predict(evaluationData[i]);
    predictions.push(prediction);
  }

  var accuracy;
  var crossEntropy;
  if (numberOfClasses === 2) {
    accuracy = tensorflow.metrics
      .binaryAccuracy(tensorflow.tensor(labels), predictions)
      .dataSync()[0];
    crossEntropy = tensorflow.metrics
      .binaryCrossentropy(tensorflow.tensor(labels), predictions)
      .dataSync()[0];
  } else {
    accuracy = tensorflow.metrics
      .categoricalAccuracy(tensorflow.tensor(labels), predictions)
      .dataSync()[0];
    crossEntropy = tensorflow.metrics
      .categoricalCrossentropy(tensorflow.tensor(labels), predictions)
      .dataSync()[0];
  }
  var confusionMatrixArray = tensorflow.math
    .confusionMatrix(tensorflow.tensor(labels), predictions, numberOfClasses)
    .dataSync();
  return {
    accuracy: accuracy,
    crossEntropy: crossEntropy,
    confusionMatrixArray: confusionMatrixArray
  };
};
