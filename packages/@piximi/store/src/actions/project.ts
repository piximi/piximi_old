import {createAction} from "@reduxjs/toolkit";

export const createCategory = createAction<{}>("create-category");
export const createImage = createAction<{}>("create-image");
export const createImages = createAction<{}>("create-images");
export const createImageScore = createAction<{}>("create-images-score");
export const createProject = createAction<{}>("create-project");
export const deleteCategory = createAction<{}>("delete-category");
export const deleteImage = createAction<{}>("delete-image");
export const openProject = createAction<{}>("open-project");
export const toggleCategoryVisibility = createAction<{}>(
  "toggle-category-visibility"
);
export const updateCategoryColor = createAction<{}>("update-category-color");
export const updateCategoryDescription = createAction<{}>(
  "update-category-description"
);
export const updateCategoryVisibility = createAction<{}>(
  "update-category-visibility"
);
export const updateImageBrightness = createAction<{}>(
  "update-image-brightness"
);
export const updateImageCategory = createAction<{}>("update-image-category");
export const updateImageContrast = createAction<{}>("update-image-contrast");
export const updateImagesCategory = createAction<{}>("update-images-category");
export const updateImagesPartition = createAction<{}>(
  "update-images-partition"
);
export const updateImageVisibility = createAction<{}>(
  "update-image-visibility"
);
export const updateProjectName = createAction<{}>("update-project-name");
