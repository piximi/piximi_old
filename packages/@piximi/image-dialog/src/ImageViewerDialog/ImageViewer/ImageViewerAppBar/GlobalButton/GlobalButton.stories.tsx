import React from 'react';

import { storiesOf } from '@storybook/react';
import { GlobalButton } from './GlobalButton';

storiesOf('ImageViewer/ImageViewerAppBar/GlobalButton', module).add(
  'GlobalButton',
  () => {
    return <GlobalButton />;
  }
);
