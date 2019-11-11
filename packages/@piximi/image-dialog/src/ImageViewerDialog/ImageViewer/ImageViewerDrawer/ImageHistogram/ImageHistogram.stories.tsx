import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageHistogram } from './ImageHistogram';

storiesOf('ImageViewer/ImageHistogram', module).add('ImageHistogram', () => {
  return <ImageHistogram />;
});
