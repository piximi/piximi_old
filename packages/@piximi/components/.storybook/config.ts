import { configure } from '@storybook/react';

const stories = () => {
  require('../src/CategoryDescriptionTextField/CategoryDescriptionTextField.stories.tsx');
  require('../src/CategoryDropTarget/CategoryDropTarget.stories.tsx');
  require('../src/ColorIconButton/ColorIconButton.stories.tsx');
  require('../src/ColorIconMenu/ColorIconMenu.stories.tsx');
  require('../src/Dialog/Dialog.stories.tsx');
  require('../src/DialogActions/DialogActions.stories.tsx');
  require('../src/DialogContent/DialogContent.stories.tsx');
  require('../src/DialogTitle/DialogTitle.stories.tsx');
  require('../src/FilenameTextField/FilenameTextField.stories.tsx');
  require('../src/Image/Image.stories.tsx');
  require('../src/ImageDragSource/ImageDragSource.stories.tsx');
  require('../src/Snackbar/Snackbar.stories.tsx');
};

configure(stories, module);
