import {Category} from "..";
import {Image} from "..";

export type Classifier = {
  categories: Array<Category>;
  images: Array<Image>;
  name: string;
};
