import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerExposureDrawer } from './ImageViewerExposureDrawer';
import * as example from '../../ImageCanvas/Image/example.jpg';

const setBrightness = () => {};

const setContrast = () => {};

const setUnselectedChannels = () => {};

storiesOf('ImageViewerExposureDrawer', module).add(
  'ImageViewerExposureDrawer',
  () => {
    return (
      <ImageViewerExposureDrawer
        onClose={() => {}}
        open={true}
        src={example}
        imgIdentifier={''}
        setBrightness={setBrightness}
        brightness={100}
        setContrast={setContrast}
        contrast={100}
        setUnselectedChannels={setUnselectedChannels}
        unselectedChannels={[]}
      />
    );
  }
);
