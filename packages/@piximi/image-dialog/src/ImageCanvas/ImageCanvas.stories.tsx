import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageCanvas } from './ImageCanvas';

storiesOf('ImageHistogram', module).add('ImageHistogram', () => {
  return <ImageCanvas />;
});
