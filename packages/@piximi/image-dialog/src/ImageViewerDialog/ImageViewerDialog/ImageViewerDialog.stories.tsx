import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerDialog } from './ImageViewerDialog';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';

const onClose = () => {};

const src: string = 'https://picsum.photos/256/256';

storiesOf('ImageViewerDialog', module).add('example', () => {
  return (
    <Provider store={store}>
      <ImageViewerDialog
        onClose={onClose}
        open={true}
        src={src}
        imgIdentifier={''}
      />
    </Provider>
  );
});
