import { Category, Image, Model } from '..';

export type Classifier = {
  categories: Array<Category>;
  images: Array<Image>;
  model: Model;
  name: string;
};
