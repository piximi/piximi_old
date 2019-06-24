import React from 'react';
import { storiesOf } from '@storybook/react';
import { ClassifierList } from './ClassifierList';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

storiesOf('ClassifierList', module).add('example', () => (
  <Provider store={store}>
    <ClassifierList />
  </Provider>
));
