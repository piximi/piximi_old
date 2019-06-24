import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ImageDialogContent } from './ImageDialogContent';
import { Image, Partition } from '@piximi/types';

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

const onClose = () => {};

const saveEditsGlobally = (
  images: Image[],
  brightness: number,
  contrast: number
) => {};

storiesOf('ImageDialogContent', module).add('example', () => (
  <ImageDialogContent
    image={image}
    images={[image]}
    onClose={onClose}
    saveEditsGlobally={saveEditsGlobally}
  />
));
