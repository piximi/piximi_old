import React from 'react';
import { storiesOf } from '@storybook/react';
import { SaveClassifierMenuItem } from './SaveClassifierMenuItem';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

storiesOf('SaveClassifierMenuItem', module).add('example', () => (
  <Provider store={store}>
    <SaveClassifierMenuItem />
  </Provider>
));
