import React from 'react';

import { storiesOf } from '@storybook/react';
import { ConnectedImageViewer } from './ConnectedImageViewer';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

const onClose = () => {};

const src: string = 'https://picsum.photos/256/256';

storiesOf('ImageViewer/ImageViewer', module).add('example', () => {
  return (
    <Provider store={store}>
      <ConnectedImageViewer src={src} onClose={onClose} />
    </Provider>
  );
});
