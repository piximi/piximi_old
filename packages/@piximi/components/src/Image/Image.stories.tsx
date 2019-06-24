import React from 'react';

import { storiesOf } from '@storybook/react';

import { Image } from '..';

const brightness = 100;
const contrast = 100;
const height = 100;
const width = 100;
const openImageViewerDialog = () => {};
const src = '';

storiesOf('Image', module).add('example', () => (
  <Image
    brightness={brightness}
    contrast={contrast}
    height={height}
    openImageViewerDialog={openImageViewerDialog}
    src={src}
    width={width}
  />
));
