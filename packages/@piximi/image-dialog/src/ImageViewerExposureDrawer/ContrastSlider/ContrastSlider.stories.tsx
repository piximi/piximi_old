import React from 'react';

import { storiesOf } from '@storybook/react';
import { ContrastSlider } from './ContrastSlider';

const setContrast = () => {};

storiesOf('ContrastSlider', module).add('ContrastSlider', () => {
  return <ContrastSlider contrast={0} setContrast={setContrast} />;
});
