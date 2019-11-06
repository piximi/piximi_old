import React from 'react';

import { storiesOf } from '@storybook/react';
import { ConnectedImageViewer } from './ConnectedImageViewer';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';
import { ImageViewer } from './ImageViewer';

const src: string = 'https://dummyimage.com/512x512/f3f3f3/fff.png&text=+';

const onClose = () => {};

storiesOf('ImageViewer', module).add('ImageViewer', () => {
  return (
    <Provider store={store}>
      <ConnectedImageViewer
        imgIdentifier={'example'}
        src={src}
        onClose={onClose}
      />
    </Provider>
  );
});
