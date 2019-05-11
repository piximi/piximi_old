import {Image, Category} from "@cytoai/store/dist/types";
import * as tensorflow from '@tensorflow/tfjs';

export class Classification {
  private graph?: tensorflow.GraphModel;

  async compile(resource: string) {
    this.graph = await tensorflow.loadGraphModel(resource);
  }

  async fit(images: Image[], categories: Category[]) {
    const x: string[] = images.map((image) => image.data);

    const y: string[] = categories.map((category) => category.identifier);

    if (this.graph) {

    }
  }

  predict(images: Image[]) {
    if (this.graph) {

    }
  }
}
