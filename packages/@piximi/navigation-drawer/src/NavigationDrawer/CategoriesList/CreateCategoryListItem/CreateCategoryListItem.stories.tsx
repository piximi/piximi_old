import React from 'react';
import { storiesOf } from '@storybook/react';
import { CreateCategoryListItem } from './CreateCategoryListItem';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

storiesOf('CreateCategoryListItem', module).add('example', () => (
  <Provider store={store}>
    <CreateCategoryListItem />
  </Provider>
));
