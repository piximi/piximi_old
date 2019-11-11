import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerAppBar } from './ImageViewerAppBar';

const onClose = () => {};

storiesOf('ImageViewer/ImageViewerAppBar', module).add('example', () => {
  return <ImageViewerAppBar onClose={onClose} />;
});
