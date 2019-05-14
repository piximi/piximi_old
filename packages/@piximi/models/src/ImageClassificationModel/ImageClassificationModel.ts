import { Category, Image } from '@cytoai/types';
import * as ImageJS from 'image-js';
import * as TensorFlow from '@tensorflow/tfjs';

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

async function getCanvas(image: Image) {
  return await ImageJS.Image.load(image.data).then((x: ImageJS.Image) =>
    x.getCanvas()
  );
}

class ImageClassificationModel {
  private readonly categories: Category[];
  private readonly images: Image[];
  private graphModel?: TensorFlow.GraphModel;
  private layersModel?: TensorFlow.LayersModel;

  constructor(categories: Category[], images: Image[]) {
    this.categories = categories;
    this.images = images;
  }

  loadGraphModel = async (modelUrl: string | TensorFlow.io.IOHandler) => {
    this.graphModel = await TensorFlow.loadGraphModel(modelUrl);
  };

  loadLayersModel = async (pathOrIOHandler: string | TensorFlow.io.IOHandler) => {
    this.layersModel = await TensorFlow.loadLayersModel(pathOrIOHandler)
  };

  fit = async () => {};

  private dataset = async () => {
    const images = [];
    const categories = [];

    for (const image of this.images) {
      const canvas = await getCanvas(image);

      images.push(canvas);

      const categoryIndex = findCategoryIndex(
        this.categories,
        image.categoryIdentifier
      );

      categories.push(categoryIndex);
    }

    const x = TensorFlow.stack(images);

    const depth: number = this.categories.length;
    const y = TensorFlow.oneHot(
      TensorFlow.tensor(categories).asType('int32'),
      depth
    );

    return {
      x: x,
      y: y
    };
  };
}

export { ImageClassificationModel };
