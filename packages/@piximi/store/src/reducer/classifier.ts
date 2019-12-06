import { Category, Classifier, Image } from '@piximi/types';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions';

const findCategoryIndex = (
  categories: Array<Category>,
  identifier: string
): number => {
  return categories.findIndex(
    (category: Category) => category.identifier === identifier
  );
};

const findImageIndex = (images: Array<Image>, identifier: string): number => {
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

export type ClassifierAction = ActionType<typeof import('../actions')>;

export const classifierReducer = (
  state: Classifier = initialState,
  action: ClassifierAction
) => {
  switch (action.type) {
    case getType(actions.createCategoryAction): {
      const { category } = action.payload;

      state.categories.push(category);

      return state;
    }
    case getType(actions.createClassifierAction): {
      const { name } = action.payload;

      state.categories = [];

      state.categories.push(unknownCategory);

      state.images = [];

      state.name = name;

      return state;
    }
    case getType(actions.openClassifierAction): {
      const { classifier } = action.payload;

      state.categories = classifier.categories;

      state.images = classifier.images;

      state.name = classifier.name;

      return state;
    }
    case getType(actions.createImageAction): {
      const { image } = action.payload;

      state.images.push(image);

      return state;
    }
    case getType(actions.createImagesAction): {
      const { images } = action.payload;

      images.forEach((image: Image) => state.images.push(image));

      return state;
    }
    case getType(actions.createImagesScoreAction): {
      const { identifiers, scores } = action.payload;
      for (let i = 0; i < identifiers.length; i++) {
        const index: number = findImageIndex(state.images, identifiers[i]);
        const image: Image = state.images[index];
        image.scores = scores[i];
      }

      return state;
    }
    case getType(actions.deleteCategoryAction): {
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

      return state;
    }
    case getType(actions.deleteImageAction): {
      const { identifier } = action.payload;

      state.images = state.images.filter(
        (image: Image) => image.identifier !== identifier
      );

      return state;
    }
    case getType(actions.toggleCategoryVisibilityAction): {
      const identifier = action.payload;

      const index: number = findCategoryIndex(state.categories, identifier);

      const category: Category = state.categories[index];

      category.visualization.visible = !category.visualization.visible;

      return state;
    }
    case getType(actions.updateCategoryColorAction): {
      const { identifier, color } = action.payload;

      const index: number = findCategoryIndex(state.categories, identifier);

      const category: Category = state.categories[index];

      category.visualization.color = color;

      return state;
    }
    case getType(actions.updateCategoryDescriptionAction): {
      const { identifier, description } = action.payload;

      const index: number = findCategoryIndex(state.categories, identifier);

      const category: Category = state.categories[index];

      category.description = description;

      return state;
    }
    case getType(actions.updateCategoryVisibilityAction): {
      const { identifier, visible } = action.payload;

      const index: number = findCategoryIndex(state.categories, identifier);

      const category: Category = state.categories[index];

      category.visualization.visible = visible;

      return state;
    }
    case getType(actions.updateClassifierNameAction): {
      const { name } = action.payload;

      state.name = name;

      return state;
    }
    case getType(actions.updateImageBrightnessAction): {
      const { identifier, brightness } = action.payload;

      const index: number = findImageIndex(state.images, identifier);

      const image: Image = state.images[index];

      image.visualization.brightness = brightness;

      return state;
    }
    case getType(actions.updateImageCategoryAction): {
      const { identifier, categoryIdentifier } = action.payload;

      const index: number = findImageIndex(state.images, identifier);

      const image: Image = state.images[index];

      image.categoryIdentifier = categoryIdentifier;

      return state;
    }
    case getType(actions.updateImagesCategoryAction): {
      const { identifiers, categoryIdentifier } = action.payload;

      identifiers.forEach((identifier: string) => {
        const index: number = findImageIndex(state.images, identifier);
        const image: Image = state.images[index];
        image.categoryIdentifier = categoryIdentifier;
      });

      return state;
    }
    case getType(actions.updateImageContrastAction): {
      const { identifier, contrast } = action.payload;

      const index: number = findImageIndex(state.images, identifier);

      const image: Image = state.images[index];

      image.visualization.contrast = contrast;

      return state;
    }
    case getType(actions.updateImageVisibilityAction): {
      const { identifier, visible } = action.payload;

      const index: number = findImageIndex(state.images, identifier);

      const image: Image = state.images[index];

      image.visualization.visible = visible;

      return state;
    }
    case getType(actions.updateImagesPartitionAction): {
      const { identifiers, partition } = action.payload;

      identifiers.forEach((identifier: string) => {
        const index: number = findImageIndex(state.images, identifier);
        const image: Image = state.images[index];
        image.partition = partition;
      });

      return state;
    }
    case getType(actions.updateImagesVisibilityAction): {
      const { identifiers, visible } = action.payload;

      for (let i = 0; i < identifiers.length; i++) {
        const index: number = findImageIndex(state.images, identifiers[i]);

        const image: Image = state.images[index];

        image.visualization.visible = visible;
      }

      return state;
    }
    default: {
      return state;
    }
  }
};
