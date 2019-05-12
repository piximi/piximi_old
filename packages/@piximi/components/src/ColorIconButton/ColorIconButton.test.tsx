import ReactDOM from 'react-dom';
import * as React from 'react';

import ColorIconButton from './ColorIconButton';

it('ColorIconButton', () => {
  const color = '';

  const onColorChange = () => {};

  const e = <ColorIconButton color={color} onColorChange={onColorChange} />;

  ReactDOM.render(e, document.createElement('div'));
});
