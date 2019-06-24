import React from 'react';

import { storiesOf } from '@storybook/react';

import { ColorIconButton } from '..';

const color = '';

const onColorChange = () => {};

storiesOf('ColorIconButton', module).add('example', () => (
  <ColorIconButton color={color} colors={[]} onColorChange={onColorChange} />
));
