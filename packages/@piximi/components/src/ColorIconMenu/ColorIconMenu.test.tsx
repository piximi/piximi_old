import ReactDOM from 'react-dom';
import * as React from 'react';

import ColorIconMenu from './ColorIconMenu';

it('renders without crashing', () => {
  const color = '';

  const onColorChange = () => {};

  const e = <ColorIconMenu color={color} onColorChange={onColorChange} />;

  ReactDOM.render(e, document.createElement('div'));
});
