import React from 'react';

import { storiesOf } from '@storybook/react';
import { ConnectedImageViewer } from './ConnectedImageViewer';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';
import { ImageViewer } from './ImageViewer';
import * as example from '../Image/example.jpg';

const onClose = () => {};

storiesOf('ImageViewer', module).add('ImageViewer', () => {
  return (
    <Provider store={store}>
      <ConnectedImageViewer
        imgIdentifier={'example'}
        src={example}
        onClose={onClose}
      />
    </Provider>
  );
});
