import { storiesOf } from '@storybook/react';
import { ContrastSlider } from '.';
import React from 'react';

storiesOf('ContrastSlider', module).add('example', () => (
  <ContrastSlider contrast={0} setContrast={() => {}} />
));
