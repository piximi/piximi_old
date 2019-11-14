import React from 'react';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import ConnectedGalleryDialog from './ConnectedGallery';

storiesOf('Gallery', module).add('example', () => {
  return (
    <Provider store={store}>
      <ConnectedGalleryDialog />
    </Provider>
  );
});
