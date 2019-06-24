import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApplicationList } from './ApplicationList';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

storiesOf('ApplicationList', module).add('example', () => (
  <Provider store={store}>
    <ApplicationList />
  </Provider>
));
