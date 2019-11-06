import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerExposureDrawer } from './ImageViewerExposureDrawer';

storiesOf('ImageViewerExposureDrawer', module).add(
  'ImageViewerExposureDrawer',
  () => {
    return <ImageViewerExposureDrawer />;
  }
);
