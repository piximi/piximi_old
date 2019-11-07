import React from 'react';

import { storiesOf } from '@storybook/react';
import { ImageViewerExposureDrawer } from './ImageViewerExposureDrawer';
import * as example from '../../ImageCanvas/Image/example.jpg';

const setUnselectedChannels = () => {};

storiesOf('ImageViewerExposureDrawer', module).add(
  'ImageViewerExposureDrawer',
  () => {
    return React.createElement(() => {
      const [brightness, setBrightness] = React.useState(0.5);

      const [contrast, setContrast] = React.useState(0.5);

      return (
        <ImageViewerExposureDrawer
          onClose={() => {}}
          open={true}
          src={example}
          imgIdentifier={''}
          setBrightness={setBrightness}
          brightness={brightness}
          setContrast={setContrast}
          contrast={contrast}
          setUnselectedChannels={setUnselectedChannels}
          unselectedChannels={[]}
        />
      );
    });
  }
);
