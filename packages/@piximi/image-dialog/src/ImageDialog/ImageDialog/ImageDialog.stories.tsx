import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';
import { ImageDialog } from './ImageDialog';

const onClose = () => {};

storiesOf('ImageDialog', module).add('example', () => (
  <Provider store={store}>
    <ImageDialog onClose={onClose} open={true} src={''} imgIdentifier={''} />
  </Provider>
));
