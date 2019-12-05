import { Category, Classifier, Image } from '@piximi/types';
import { createReducer } from 'typesafe-actions';
import {
  createCategoryAction,
  createClassifierAction,
  createImageAction,
  createImagesAction,
  createImagesScoreAction,
  deleteCategoryAction,
  deleteImageAction,
  openClassifierAction,
  toggleCategoryVisibilityAction,
  updateCategoryColorAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction,
  updateClassifierNameAction,
  updateImageBrightnessAction,
  updateImageCategoryAction,
  updateImageContrastAction,
  updateImagesCategoryAction,
  updateImagesPartitionAction,
  updateImagesVisibilityAction,
  updateImageVisibilityAction
} from '../actions';

const findCategoryIndex = (
  categories: Category[],
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

const findImageIndex = (images: Image[], identifier: string): number => {
  return images.findIndex((image: Image) => image.identifier === identifier);
};

const initialState: Classifier = {
  categories: [],
  images: [],
  name: 'Untitled classifier'
};

const unknownCategory: Category = {
  description: 'Unknown',
  identifier: '00000000-0000-0000-0000-000000000000',
  index: 0,
  visualization: {
    color: 'rgb(233, 165, 177)',
    visible: true
  }
};

export const classifierReducer = createReducer(initialState)
  .handleAction(createCategoryAction, (state: any, action: any) => {
    const { category } = action.payload;

    state.categories.push(category);
  })
  .handleAction(createClassifierAction, (state: any, action: any) => {
    const { name } = action.payload;

    state.categories = [];

    state.categories.push(unknownCategory);

    state.images = [];

    state.name = name;
  })
  .handleAction(openClassifierAction, (state: any, action: any) => {
    const { classifier } = action.payload;

    state.categories = classifier.categories;

    state.images = classifier.images;

    state.name = classifier.name;
  })
  .handleAction(createImageAction, (state: any, action: any) => {
    const { image } = action.payload;

    state.images.push(image);
  })
  .handleAction(createImagesAction, (state: any, action: any) => {
    const { images } = action.payload;

    images.forEach((image: Image) => state.images.push(image));
  })
  .handleAction(createImagesScoreAction, (state: any, action: any) => {
    const { identifiers, scores } = action.payload;
    for (let i = 0; i < identifiers.length; i++) {
      const index: number = findImageIndex(state.images, identifiers[i]);
      const image: Image = state.images[index];
      image.scores = scores[i];
    }
  })
  .handleAction(deleteCategoryAction, (state: any, action: any) => {
    const { identifier } = action.payload;

    state.categories = state.categories.filter((category: Category) => {
      return category.identifier !== identifier;
    });

    state.images = state.images.map((image: Image) => {
      if (image.categoryIdentifier === identifier) {
        image.categoryIdentifier = '00000000-0000-0000-0000-000000000000';
      }

      return image;
    });
  })
  .handleAction(deleteImageAction, (state: any, action: any) => {
    const { identifier } = action.payload;

    state.images = state.images.filter(
      (image: Image) => image.identifier !== identifier
    );
  })
  .handleAction(toggleCategoryVisibilityAction, (state: any, action: any) => {
    const { identifier } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.visible = !category.visualization.visible;
  })
  .handleAction(updateCategoryColorAction, (state: any, action: any) => {
    const { identifier, color } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.color = color;
  })
  .handleAction(updateCategoryDescriptionAction, (state: any, action: any) => {
    const { identifier, description } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.description = description;
  })
  .handleAction(updateCategoryVisibilityAction, (state: any, action: any) => {
    const { identifier, visible } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.visible = visible;
  })
  .handleAction(updateClassifierNameAction, (state: any, action: any) => {
    const { name } = action.payload;

    state.name = name;
  })
  .handleAction(updateImageBrightnessAction, (state: any, action: any) => {
    const { identifier, brightness } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.brightness = brightness;
  })
  .handleAction(updateImageCategoryAction, (state: any, action: any) => {
    const { identifier, categoryIdentifier } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.categoryIdentifier = categoryIdentifier;
  })
  .handleAction(updateImagesCategoryAction, (state: any, action: any) => {
    const { identifiers, categoryIdentifier } = action.payload;

    identifiers.forEach((identifier: string) => {
      const index: number = findImageIndex(state.images, identifier);
      const image: Image = state.images[index];
      image.categoryIdentifier = categoryIdentifier;
    });
  })
  .handleAction(updateImageContrastAction, (state: any, action: any) => {
    const { identifier, contrast } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.contrast = contrast;
  })
  .handleAction(updateImageVisibilityAction, (state: any, action: any) => {
    const { identifier, visible } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.visible = visible;
  })
  .handleAction(updateImagesPartitionAction, (state: any, action: any) => {
    const { partitions } = action.payload;

    state.images.forEach((image: Image) => {
      image.partition = partitions[0];
      partitions.splice(0, 1);
    });
  })
  .handleAction(updateImagesVisibilityAction, (state: any, action: any) => {
    const { identifiers, visible } = action.payload;

    for (let i = 0; i < identifiers.length; i++) {
      const index: number = findImageIndex(state.images, identifiers[i]);

      const image: Image = state.images[index];

      image.visualization.visible = visible;
    }
  });
