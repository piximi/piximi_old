import React from 'react';

import { storiesOf } from '@storybook/react';
import { UndoButton } from './UndoButton';

storiesOf('ImageViewer/ImageViewerAppBar/UndoButton', module).add(
  'UndoButton',
  () => {
    return <UndoButton />;
  }
);
