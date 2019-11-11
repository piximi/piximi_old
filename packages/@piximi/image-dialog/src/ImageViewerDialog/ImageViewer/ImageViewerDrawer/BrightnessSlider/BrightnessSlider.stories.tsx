import React from 'react';

import { storiesOf } from '@storybook/react';
import { BrightnessSlider } from './BrightnessSlider';

storiesOf('ImageViewer/BrightnessSlider', module).add(
  'BrightnessSlider',
  () => {
    return <BrightnessSlider />;
  }
);
