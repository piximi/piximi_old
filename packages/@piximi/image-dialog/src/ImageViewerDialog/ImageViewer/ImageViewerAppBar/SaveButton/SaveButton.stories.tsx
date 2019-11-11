import React from 'react';

import { storiesOf } from '@storybook/react';
import { SaveButton } from './SaveButton';

storiesOf('ImageViewer/ImageViewerAppBar/SaveButton', module).add(
  'SaveButton',
  () => {
    return <SaveButton />;
  }
);
