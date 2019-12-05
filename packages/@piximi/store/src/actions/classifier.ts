import { Category, Classifier, Image, Partition, Score } from '@piximi/types';
import { createAction } from 'typesafe-actions';

export const createCategoryAction = createAction(
  'create-category',
  (category: Category) => {
    return { category: category };
  }
)();

export const createClassifierAction = createAction(
  'create-classifier',
  (name: string) => {
    return { name: name };
  }
)();

export const createImageAction = createAction(
  'create-image',
  (identifier: string, image: Image) => {
    return { identifier: identifier, image: image };
  }
)();

export const createImagesAction = createAction(
  'create-images',
  (images: Array<Image>) => {
    return { images: images };
  }
)();

export const createImagesScoreAction = createAction(
  'create-images-score',
  (identifiers: Array<string>, scores: Array<Array<Score>>) => {
    return { identifiers: identifiers, scores: scores };
  }
)();

export const deleteCategoryAction = createAction(
  'delete-category',
  (identifier: string) => {
    return { identifier: identifier };
  }
)();

export const deleteImageAction = createAction(
  'delete-image',
  (identifier: string) => {
    return { identifier: identifier };
  }
)();

export const openClassifierAction = createAction(
  'open-classifier',
  (classifier: Classifier) => {
    return { classifier: classifier };
  }
)();

export const toggleCategoryVisibilityAction = createAction(
  'toggle-category-visibility',
  (identifier: string) => {
    return identifier;
  }
)();

export const updateCategoryColorAction = createAction(
  'update-category-color',
  (identifier: string, color: string) => {
    return { identifier: identifier, color: color };
  }
)();

export const updateCategoryDescriptionAction = createAction(
  'update-category-description',
  (description: string, identifier: string) => {
    return { identifier: identifier, description: description };
  }
)();

export const updateCategoryVisibilityAction = createAction(
  'update-category-visibility',
  (identifier: string, visible: boolean) => {
    return { identifier: identifier, visible: visible };
  }
)();

export const updateClassifierNameAction = createAction(
  'update-classifier-name',
  (name: string) => {
    return { name: name };
  }
)();

export const updateImageBrightnessAction = createAction(
  'update-image-brightness',
  (brightness: number, identifier: string) => {
    return { brightness: brightness, identifier: identifier };
  }
)();

export const updateImageCategoryAction = createAction(
  'update-image-category',
  (categoryIdentifier: string, identifier: string) => {
    return { categoryIdentifier: categoryIdentifier, identifier: identifier };
  }
)();

export const updateImageContrastAction = createAction(
  'update-image-contrast',
  (contrast: number, identifier: string) => {
    return { contrast: contrast, identifier: identifier };
  }
)();

export const updateImageVisibilityAction = createAction(
  'update-image-visibility',
  (identifier: string, visible: boolean) => {
    return { identifier: identifier, visible: visible };
  }
)();

export const updateImagesCategoryAction = createAction(
  'update-images-category',
  (categoryIdentifier: string, identifiers: Array<string>) => {
    return { categoryIdentifier: categoryIdentifier, identifiers: identifiers };
  }
)();

export const updateImagesPartitionAction = createAction(
  'update-images-partition',
  (identifiers: Array<string>, partition: Partition) => {
    return { identifiers: identifiers, partition: partition };
  }
)();

export const updateImagesVisibilityAction = createAction(
  'update-images-visibility',
  (identifiers: Array<string>, visible: boolean) => {
    return { identifiers: identifiers, visible: visible };
  }
)();
