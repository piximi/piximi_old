import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerAppBar } from './ImageViewerAppBar';

const onClose = () => {};

const saveEditsGlobally = () => {};

storiesOf('ImageViewerAppBar', module).add('ImageViewerAppBar', () => {
  return (
    <ImageViewerAppBar
      imgIdentifier={''}
      saveEditsGlobally={saveEditsGlobally}
      onClose={onClose}
      images={[]}
    />
  );
});
