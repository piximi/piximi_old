import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerAppBar } from './ImageViewerAppBar';

const onClose = () => {};

storiesOf('ImageViewerAppBar', module).add('ImageViewerAppBar', () => {
  return <ImageViewerAppBar onClose={onClose} />;
});
