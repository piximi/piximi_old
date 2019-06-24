import { shallow } from 'enzyme';
import * as React from 'react';

import { ColorIconButton } from './ColorIconButton';

it('ColorIconButton', () => {
  const color = '';

  const onColorChange = () => {};

  const e = (
    <ColorIconButton color={color} colors={[]} onColorChange={onColorChange} />
  );

  shallow(e);
});
