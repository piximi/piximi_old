import {Category, Image, Project} from "@piximi/types";
import {createReducer} from "@reduxjs/toolkit";

import * as actions from "../actions/project";

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

const state: Project = {
  categories: [],
  images: [],
  name: "Untitled classifier"
};

const unknownCategory: Category = {
  description: "Unknown",
  identifier: "00000000-0000-0000-0000-000000000000",
  index: 0,
  visualization: {
    color: "rgb(233, 165, 177)",
    visible: true
  }
};

state.categories.push(unknownCategory);

export const reducer = createReducer(state, {
  [actions.createCategory.toString()]: (state, action) => {
    const {category} = action.payload;

    state.categories.push(category);
  },
  [actions.createProject.toString()]: (state, action) => {
    const {name} = action.payload;

    state.categories = [];

    state.categories.push(unknownCategory);

    state.images = [];

    state.name = name;
  },
  [actions.openProject.toString()]: (state, action) => {
    const {categories, images, name} = action.payload;

    state.categories = categories;

    state.images = images;

    state.name = name;
  },
  [actions.createImage.toString()]: (state, action) => {
    const {image} = action.payload;

    state.images.push(image);
  },
  [actions.createImages.toString()]: (state, action) => {
    const {images} = action.payload;

    images.forEach((image: Image) => state.images.push(image));
  },
  [actions.createImageScore.toString()]: (state, action) => {
    const {identifiers, scores} = action.payload;
    for (let i = 0; i < identifiers.length; i++) {
      const index: number = findImageIndex(state.images, identifiers[i]);
      const image: Image = state.images[index];
      image.scores = scores[i];
    }
  },
  [actions.deleteCategory.toString()]: (state, action) => {
    const {identifier} = action.payload;

    state.categories = state.categories.filter((category: Category) => {
      return category.identifier !== identifier;
    });

    state.images = state.images.map((image: Image) => {
      if (image.categoryIdentifier === identifier) {
        image.categoryIdentifier = "00000000-0000-0000-0000-000000000000";
      }

      return image;
    });
  },
  [actions.deleteImage.toString()]: (state, action) => {
    const {identifier} = action.payload;

    state.images = state.images.filter(
      (image: Image) => image.identifier !== identifier
    );
  },
  [actions.toggleCategoryVisibility.toString()]: (state, action) => {
    const {identifier} = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.visible = !category.visualization.visible;
  },
  [actions.updateCategoryColor.toString()]: (state, action) => {
    const {identifier, color} = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.color = color;
  },
  [actions.updateCategoryDescription.toString()]: (state, action) => {
    const {identifier, description} = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.description = description;
  },
  [actions.updateCategoryVisibility.toString()]: (state, action) => {
    const {identifier, visible} = action.payload;

    const index: number = findCategoryIndex(state.categories, identifier);

    const category: Category = state.categories[index];

    category.visualization.visible = visible;
  },
  [actions.updateProjectName.toString()]: (state, action) => {
    const {name} = action.payload;

    state.name = name;
  },
  [actions.updateImageBrightness.toString()]: (state, action) => {
    const {identifier, brightness} = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.brightness = brightness;
  },
  [actions.updateImageCategory.toString()]: (state, action) => {
    const {identifier, categoryIdentifier} = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.categoryIdentifier = categoryIdentifier;
  },
  [actions.updateImagesCategory.toString()]: (state, action) => {
    const {identifiers, categoryIdentifier} = action.payload;

    identifiers.forEach((identifier: string) => {
      const index: number = findImageIndex(state.images, identifier);
      const image: Image = state.images[index];
      image.categoryIdentifier = categoryIdentifier;
    });
  },
  [actions.updateImageContrast.toString()]: (state, action) => {
    const {identifier, contrast} = action.payload;

    const index: number = findImageIndex(state.images, identifier);

    const image: Image = state.images[index];

    image.visualization.contrast = contrast;
  },
  [actions.updateImageVisibility.toString()]: (state, action) => {
    const {identifiers, visible} = action.payload;

    for (let i = 0; i < identifiers.length; i++) {
      const index: number = findImageIndex(state.images, identifiers[i]);

      const image: Image = state.images[index];

      image.visualization.visible = visible;
    }
  },
  [actions.updateImagesPartition.toString()]: (state, action) => {
    const {partitions} = action.payload;

    state.images.forEach((image: Image) => {
      image.partition = partitions[0];
      partitions.splice(0, 1);
    });
  }
});
