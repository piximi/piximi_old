import React from 'react';
import { storiesOf } from '@storybook/react';
import { OpenExampleClassifierMenuItem } from './OpenExampleClassifierMenuItem';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

const closeMenu = () => {};

storiesOf('OpenExampleClassifierMenuItem', module).add('example', () => (
  <Provider store={store}>
    <OpenExampleClassifierMenuItem closeMenu={closeMenu} />
  </Provider>
));
