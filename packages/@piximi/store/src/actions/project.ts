import {createAction} from "@reduxjs/toolkit";
import {Category, Image, Project, Score} from "@piximi/types";

export const createCategoryAction = createAction<{category: Category}>(
  "PROJECT_CREATE_CATEGORY"
);

export const createImageAction = createAction<{image: Image}>(
  "PROJECT_CREATE_IMAGE"
);

export const createImagesAction = createAction<{images: Array<Image>}>(
  "PROJECT_CREATE_IMAGES"
);

export const createImageScoreAction = createAction<{
  image: Image;
  score: Score;
}>("PROJECT_CREATE_IMAGES_SCORE");

export const createProjectAction = createAction<{project: Project}>(
  "PROJECT_CREATE_PROJECT"
);

export const deleteCategoryAction = createAction<{category: Category}>(
  "PROJECT_DELETE_CATEGORY"
);

export const deleteImageAction = createAction<{image: Image}>(
  "PROJECT_DELETE_IMAGE"
);

export const openProjectAction = createAction<{project: Project}>(
  "PROJECT_OPEN_PROJECT"
);

export const toggleCategoryVisibilityAction = createAction<{
  category: Category;
}>("PROJECT_TOGGLE_CATEGORY_VISIBILITY");

export const updateCategoryColorAction = createAction<{
  category: Category;
  color: string;
}>("PROJECT_UPDATE_CATEGORY_COLOR");

export const updateCategoryDescriptionAction = createAction<{
  category: Category;
  description: string;
}>("PROJECT_UPDATE_CATEGORY_DESCRIPTION");

export const updateCategoryVisibilityAction = createAction<{}>(
  "PROJECT_UPDATE_CATEGORY_VISIBILITY"
);

export const updateImageBrightnessAction = createAction<{}>(
  "PROJECT_UPDATE_IMAGE_BRIGHTNESS"
);

export const updateImageCategoryAction = createAction<{}>(
  "PROJECT_UPDATE_IMAGE_CATEGORY"
);

export const updateImageContrastAction = createAction<{}>(
  "PROJECT_UPDATE_IMAGE_CONTRAST"
);

export const updateImagesCategoryAction = createAction<{}>(
  "PROJECT_UPDATE_IMAGES_CATEGORY"
);

export const updateImagesPartitionAction = createAction<{}>(
  "PROJECT_UPDATE_IMAGES_PARTITION"
);

export const updateImageVisibilityAction = createAction<{}>(
  "PROJECT_UPDATE_IMAGE_VISIBILITY"
);

export const updateProjectNameAction = createAction<{}>("PROJECT_UPDATE_NAME");
