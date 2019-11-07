import React from 'react';

import { storiesOf } from '@storybook/react';
import { BrightnessSlider } from './BrightnessSlider';

const setBrightness = () => {};

storiesOf('BrightnessSlider', module).add('BrightnessSlider', () => {
  return <BrightnessSlider brightness={0} setBrightness={setBrightness} />;
});
