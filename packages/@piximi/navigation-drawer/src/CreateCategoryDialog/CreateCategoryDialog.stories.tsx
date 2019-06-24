import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedCreateCategoryDialog } from './ConnectedCreateCategoryDialog';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';

const onClose = () => {};

storiesOf('CreateCategoryDialog', module).add('example', () => (
  <Provider store={store}>
    <ConnectedCreateCategoryDialog open onClose={onClose} />
  </Provider>
));
