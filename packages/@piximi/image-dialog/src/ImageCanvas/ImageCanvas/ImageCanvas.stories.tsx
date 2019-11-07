import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageCanvas } from './ImageCanvas';
import * as example from '../Image/example.jpg';

storiesOf('ImageCanvas', module).add('ImageCanvas', () => {
  return <ImageCanvas src={example} />;
});
