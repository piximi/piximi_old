import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerDrawer } from './ImageViewerDrawer';
import * as example from '../../ImageCanvas/Image/example.jpg';

storiesOf('ImageViewerDrawer', module).add('ImageViewerDrawer', () => {
  return React.createElement(() => {
    return <ImageViewerDrawer src={example} />;
  });
});
