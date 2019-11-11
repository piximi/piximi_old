import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerDrawer } from './ImageViewerDrawer';

const src: string = 'https://picsum.photos/256/256';

storiesOf('ImageViewerDrawer', module).add('ImageViewerDrawer', () => {
  return React.createElement(() => {
    return <ImageViewerDrawer src={src} />;
  });
});
