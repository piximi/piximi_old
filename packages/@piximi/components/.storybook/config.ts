import { configure } from '@storybook/react';

const stories = () => {
  require('../src/CategoryDescriptionTextField/CategoryDescriptionTextField.stories');
  require('../src/CategoryDropTarget/CategoryDropTarget.stories');
  require('../src/ColorIconButton/ColorIconButton.stories');
  require('../src/ColorIconMenu/ColorIconMenu.stories');
  require('../src/Dialog/Dialog.stories');
  require('../src/DialogActions/DialogActions.stories');
  require('../src/DialogContent/DialogContent.stories');
  require('../src/DialogTitle/DialogTitle.stories');
  require('../src/FilenameTextField/FilenameTextField.stories');
  require('../src/Image/Image.stories');
  require('../src/ImageDragSource/ImageDragSource.stories');
  require('../src/Snackbar/Snackbar.stories');
};

configure(stories, module);
