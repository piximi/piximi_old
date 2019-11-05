import { Category, Image } from '@piximi/types';
import * as ImageJS from 'image-js';
import * as tensorflow from '@tensorflow/tfjs';

export const createTrainingSet = async (
  categories: Category[],
  labledData: Image[],
  numberOfClasses: number
) => {
  const trainingData: Image[] = [];
  for (let i = 0; i < labledData.length; i++) {
    if (labledData[i].partition === 0) {
      trainingData.push(labledData[i]);
    }
  }

  const trainDataSet = await createLabledTensorflowDataSet(
    trainingData,
    categories
  );

  let concatenatedTensorData = tensorflow.tidy(() =>
    tensorflow.concat(trainDataSet.data)
  );
  let concatenatedLableData = tensorflow.tidy(() =>
    tensorflow.oneHot(trainDataSet.lables, numberOfClasses)
  );

  trainDataSet.data.forEach((tensor: tensorflow.Tensor<tensorflow.Rank>) =>
    tensor.dispose()
  );

  return { data: concatenatedTensorData, lables: concatenatedLableData };
};

export const createAutotunerDataSet = async (
  categories: Category[],
  labledData: Image[]
) => {
  const trainingData: Image[] = [];
  for (let i = 0; i < labledData.length; i++) {
    if (labledData[i].partition === 0) {
      trainingData.push(labledData[i]);
    }
  }

  const trainDataSet = await createLabledTensorflowDataSet(
    trainingData,
    categories
  );

  var datapoints: {
    data: tensorflow.Tensor<tensorflow.Rank>;
    lables: number;
  }[] = [];
  for (let i = 0; i < trainDataSet.lables.length; i++) {
    datapoints.push({
      data: trainDataSet.data[i],
      lables: trainDataSet.lables[i]
    });
  }

  return datapoints;
};

export const createTestSet = async (
  categories: Category[],
  images: Image[]
) => {
  const labledData = images.filter((image: Image) => {
    return image.categoryIdentifier !== '00000000-0000-0000-0000-000000000000';
  });

  const testData: Image[] = [];
  for (let i = 0; i < labledData.length; i++) {
    if (labledData[i].partition === 2) {
      testData.push(labledData[i]);
    }
  }

  const testDataSet = await createLabledTensorflowDataSet(testData, categories);

  return { data: testDataSet.data, lables: testDataSet.lables };
};

export const createPredictionSet = async (images: Image[]) => {
  const predictionImageSet = images.filter(
    (image: Image) =>
      image.categoryIdentifier === '00000000-0000-0000-0000-000000000000'
  );

  const predictionTensorSet: tensorflow.Tensor<tensorflow.Rank>[] = [];
  const imageIdentifiers: string[] = [];

  for (const image of predictionImageSet) {
    predictionTensorSet.push(await tensorImageData(image));
    imageIdentifiers.push(image.identifier);
  }
  return { data: predictionTensorSet, identifiers: imageIdentifiers };
};

var TESTSET_RATIO = 0.2;

export const assignToSet = (): number => {
  const rdn = Math.random();
  if (rdn < TESTSET_RATIO) {
    return 2;
  } else {
    return 0;
  }
};

export const setTestsetRatio = (testsetRatio: number) => {
  TESTSET_RATIO = testsetRatio;
};

const createLabledTensorflowDataSet = async (
  labledData: Image[],
  categories: Category[]
) => {
  let tensorData: tensorflow.Tensor<tensorflow.Rank>[] = [];
  let tensorLables: number[] = [];

  for (const image of labledData) {
    tensorData.push(await tensorImageData(image));
    tensorLables.push(findCategoryIndex(categories, image.categoryIdentifier));
  }

  return { data: tensorData, lables: tensorLables };
};

const imageToSquare = (
  image: HTMLImageElement | HTMLCanvasElement,
  size: number
): HTMLCanvasElement => {
  const dimensions =
    image instanceof HTMLImageElement
      ? { width: image.naturalWidth, height: image.naturalHeight }
      : image;

  const scale = size / Math.max(dimensions.height, dimensions.width);
  const width = scale * dimensions.width;
  const height = scale * dimensions.height;

  const canvas = document.createElement('canvas') as HTMLCanvasElement;

  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  context.drawImage(image, 0, 0, width, height);

  return canvas;
};

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  const lables = categories.filter(
    (category: Category) =>
      category.identifier !== '00000000-0000-0000-0000-000000000000'
  );
  return lables.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

export const tensorImageData = async (image: Image) => {
  const data = await ImageJS.Image.load(image.data);

  return tensorflow.tidy(() => {
    return tensorflow.browser
      .fromPixels(imageToSquare(data.getCanvas(), 224))
      .toFloat()
      .sub(tensorflow.scalar(127.5))
      .div(tensorflow.scalar(127.5))
      .reshape([1, 224, 224, 3]);
  });
};
