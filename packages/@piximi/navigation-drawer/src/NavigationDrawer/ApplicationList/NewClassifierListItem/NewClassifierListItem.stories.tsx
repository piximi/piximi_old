import React from 'react';
import { storiesOf } from '@storybook/react';
import { NewClassifierListItem } from './NewClassifierListItem';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

storiesOf('NewClassifierListItem', module).add('example', () => (
  <Provider store={store}>
    <NewClassifierListItem />
  </Provider>
));
