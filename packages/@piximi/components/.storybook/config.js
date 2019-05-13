import { configure } from '@storybook/react';

function loadStories() {
  require('../src/CategoryDescriptionTextField/CategoryDescriptionTextField.stories');
  require('../src/CategoryDropTarget/CategoryDropTarget');
  require('../src/ColorIconButton/ColorIconButton');
  require('../src/ColorIconMenu/ColorIconMenu');
  require('../src/ColorPicker/ColorPicker');
  require('../src/Dialog/Dialog');
  require('../src/DialogActions/DialogActions');
  require('../src/DialogContent/DialogContent');
  require('../src/DialogTitle/DialogTitle');
  require('../src/FilenameTextField/FilenameTextField');
  require('../src/Image/Image');
  require('../src/ImageDragSource/ImageDragSource');
  require('../src/Snackbar/Snackbar');
}

configure(loadStories, module);
