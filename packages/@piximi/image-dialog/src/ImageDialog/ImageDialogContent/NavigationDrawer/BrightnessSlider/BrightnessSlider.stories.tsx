import { storiesOf } from '@storybook/react';
import { BrightnessSlider } from '.';
import React from 'react';

storiesOf('BrightnessSlider', module).add('example', () => (
  <BrightnessSlider brightness={0} setBrightness={() => {}} />
));
