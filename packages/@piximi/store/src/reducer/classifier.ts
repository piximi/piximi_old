import {
  createReducer
} from '@reduxjs/toolkit';

import {
  createCategoryAction,
  createClassifierAction,
  openClassifierAction,
  createImageAction,
  createImagesAction,
  createImagesScoreAction,
  deleteCategoryAction,
  deleteImageAction,
  toggleCategoryVisibilityAction,
  updateCategoryColorAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction,
  updateClassifierNameAction,
  updateImageBrightnessAction,
  updateImageCategoryAction,
  updateImagesCategoryAction,
  updateImageContrastAction,
  updateImageVisibilityAction,
  updateImagesPartitionAction
} from "../actions";

import {
  Category,
  Classifier,
  Image
} from "@piximi/types";

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

initialState.categories.push(unknownCategory);

export const classifierReducer = createReducer(initialState, {
  [createCategoryAction.toString()]: (state, action) => {
    const { category } = action.payload;

    state.categories.push(category);
  },
  [createClassifierAction.toString()]: (state, action) => {
    const { name } = action.payload;

    state.categories = [];

    state.categories.push(unknownCategory);

    state.images = [];

    state.name = name;
  },
  [openClassifierAction.toString()]: (state, action) => {
    const { categories, images, name } = action.payload;

    state.categories = categories;

    state.images = images;

    state.name = name;
  },
  [createImageAction.toString()]: (state, action) => {
    const { image } = action.payload;

    state.images.push(image);
  },
  [createImagesAction.toString()]: (state, action) => {
    const { images } = action.payload;

    images.forEach( (image: Image) => state.images.push(image));
  },
  [createImagesScoreAction.toString()]: (state, action) => {
    const { identifiers, scores } = action.payload;
    for (let i = 0; i < identifiers.length; i++) {
      const index: number = findImageIndex(state.images, identifiers[i]);
      const image: Image = state.images[index];
      image.scores = scores[i];
    }
  },
  [deleteCategoryAction.toString()]: (state, action) => {
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
  },
  [deleteImageAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    state.images = state.images.filter(
      (image: Image) => image.identifier !== identifier
    );
  },
  [toggleCategoryVisibilityAction.toString()]: (state, action) => {
    const { identifier } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.visible = !category.visualization.visible;
  },
  [updateCategoryColorAction.toString()]: (state, action) => {
    const { identifier, color } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.color = color;
  },
  [updateCategoryDescriptionAction.toString()]: (state, action) => {
    const { identifier, description } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.description = description;
  },
  [updateCategoryVisibilityAction.toString()]: (state, action) => {
    const { identifier, visible } = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.visible = visible;
  },
  [updateClassifierNameAction.toString()]: (state, action) => {
    const { name } = action.payload;

    state.name = name;
  },
  [updateImageBrightnessAction.toString()]: (state, action) => {
    const { identifier, brightness } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.brightness = brightness;
  },
  [updateImageCategoryAction.toString()]: (state, action) => {
    const { identifier, categoryIdentifier } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.categoryIdentifier = categoryIdentifier;
  },
  [updateImagesCategoryAction.toString()]: (state, action) => {
    const { identifiers, categoryIdentifier } = action.payload;

    identifiers.forEach( (identifier: string) => {
      const index: number = findImageIndex(state.images, identifier);
      const image: Image = state.images[index];
      image.categoryIdentifier = categoryIdentifier;
    });
  },
  [updateImageContrastAction.toString()]: (state, action) => {
    const { identifier, contrast } = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.contrast = contrast;
  },
  [updateImageVisibilityAction.toString()]: (state, action) => {
    const { identifiers, visible } = action.payload;

    for (let i = 0; i < identifiers.length; i++) {
      const index: number = findImageIndex(state.images, identifiers[i]);

      const image: Image = state.images[index];

      image.visualization.visible = visible;
    }
  },
  [updateImagesPartitionAction.toString()]: (state, action) => {
    const { partitions } = action.payload;

    state.images.forEach( (image: Image) => {
      image.partition = partitions[0];
      partitions.splice(0, 1);
    })
  }
});
