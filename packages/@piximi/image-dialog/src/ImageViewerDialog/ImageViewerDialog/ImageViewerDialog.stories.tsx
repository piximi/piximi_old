import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerDialog } from './ImageViewerDialog';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';
import * as example from '../ImageViewer/ImageCanvas/Image/example.jpg';

const onClose = () => {};

storiesOf('ImageViewerDialog', module).add('ImageViewerDialog', () => {
  return (
    <Provider store={store}>
      <ImageViewerDialog
        onClose={onClose}
        open={true}
        src={example}
        imgIdentifier={''}
      />
    </Provider>
  );
});
