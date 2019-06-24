import { configure } from '@storybook/react';

const stories = () => {
  require('../src/CategoryDescriptionTextField/CategoryDescriptionTextField.stories.tsx');
  require('../src/CategoryDropTarget/CategoryDropTarget.stories.tsx');
  require('../src/ColorIconButton/ColorIconButton.stories.tsx');
  require('../src/ColorIconMenu/ColorIconMenu.stories.tsx');
  require('../src/AlertDialog/AlertDialog.stories.js');
  require('../src/AlertDialogActions/AlertDialogActions.stories.js');
  require('../src/AlertDialogContent/AlertDialogContent.stories.js');
  require('../src/AlertDialogTitle/AlertDialogTitle.stories.js');
  require('../src/FilenameTextField/FilenameTextField.stories.tsx');
  require('../src/Image/Image.stories.tsx');
  require('../src/ImageDragSource/ImageDragSource.stories.tsx');
  require('../src/AlertSnackbar/AlertSnackbar.stories.js');
};

configure(stories, module);
