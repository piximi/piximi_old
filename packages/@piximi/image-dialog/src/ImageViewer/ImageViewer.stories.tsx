import React from 'react';

import { storiesOf } from '@storybook/react';
import { ConnectedImageViewer } from './ConnectedImageViewer';
import * as example from '../ImageCanvas/Image/example.jpg';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

const onClose = () => {};

storiesOf('ImageViewer', module).add('ImageViewer', () => {
  return (
    <Provider store={store}>
      <ConnectedImageViewer src={example} onClose={onClose} />
    </Provider>
  );
});
