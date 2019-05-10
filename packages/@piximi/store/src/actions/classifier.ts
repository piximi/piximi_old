import {
  createAction
} from "redux-starter-kit";

export const createCategoryAction = createAction(
  'create-category'
);

export const createClassifierAction = createAction(
  'create-classifier'
);

export const createImageAction = createAction(
  'create-image'
);

export const createImageScoreAction = createAction(
  'create-image-score'
);

export const deleteCategoryAction = createAction(
  'delete-category'
);

export const deleteImageAction = createAction(
  'delete-image'
);

export const toggleCategoryVisibilityAction = createAction(
  'toggle-category-visibility'
);

export const updateCategoryColorAction = createAction(
  'update-category-color'
);

export const updateCategoryDescriptionAction = createAction(
  'update-category-description'
);

export const updateCategoryVisibilityAction = createAction(
  'update-category-visibility'
);

export const updateClassifierNameAction = createAction(
  'update-classifier-name'
);

export const updateImageBrightnessAction = createAction(
  'update-image-brightness'
);

export const updateImageCategoryAction = createAction(
  'update-image-category'
);

export const updateImageContrastAction = createAction(
  'update-image-contrast'
);

export const updateImageVisibilityAction = createAction(
  'update-image-visibility'
);
