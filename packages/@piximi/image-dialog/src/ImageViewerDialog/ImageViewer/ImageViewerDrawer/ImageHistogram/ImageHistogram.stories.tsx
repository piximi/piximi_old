import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageHistogram } from './ImageHistogram';

const src: string = 'https://picsum.photos/256/256';

storiesOf('ImageViewer/ImageHistogram', module).add('ImageHistogram', () => {
  return <ImageHistogram bins={32} channels={[0, 1, 2]} src={src} />;
});
