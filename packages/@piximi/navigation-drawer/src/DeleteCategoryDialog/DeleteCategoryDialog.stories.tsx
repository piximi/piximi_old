import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedDeleteCategoryDialog } from './ConnectedDeleteCategoryDialog';
import { Category } from '@piximi/types';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';

const category: Category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

const onClose = () => {};

storiesOf('DeleteCategoryDialog', module).add('example', () => (
  <Provider store={store}>
    <ConnectedDeleteCategoryDialog category={category} open onClose={onClose} />
  </Provider>
));
