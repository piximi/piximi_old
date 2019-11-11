import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageCanvas } from './ImageCanvas';

const src: string = 'https://picsum.photos/256/256';

storiesOf('ImageCanvas', module).add('ImageCanvas', () => {
  return <ImageCanvas src={src} />;
});
