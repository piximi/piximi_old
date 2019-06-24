import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';
import { OpenClassifierMenuItem } from './OpenClassifierMenuItem';

const closeMenu = () => {};

storiesOf('OpenClassifierMenuItem', module).add('example', () => (
  <Provider store={store}>
    <OpenClassifierMenuItem />
  </Provider>
));
