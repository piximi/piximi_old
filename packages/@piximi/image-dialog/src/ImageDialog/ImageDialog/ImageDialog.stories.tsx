import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';
import { ImageDialog } from './ImageDialog';
import { Image, Partition } from '@piximi/types';

const onClose = () => {};

const image: Image = {
  categoryIdentifier: '00000000-0000-0000-0000-000000000000',
  checksum: '',
  data: '',
  identifier: '11111111-1111-1111-1111-11111111111',
  partition: Partition.Training,
  scores: [],
  visualization: {
    brightness: 0,
    contrast: 0,
    visible: true,
    visibleChannels: []
  }
};

storiesOf('ImageDialog', module).add('example', () => (
  <Provider store={store}>
    <ImageDialog image={image} onClose={onClose} open />
  </Provider>
));
