import { useMenu } from '@cytoai/hooks';
import ReactDOM from 'react-dom';
import * as React from 'react';

import ColorIconMenu from './ColorIconMenu';

it('ColorIconMenu', () => {
  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const color = '';

  const onColorChange = () => {};

  const e = (
    <ColorIconMenu
      anchorEl={anchorEl}
      closeMenu={closeMenu}
      color={color}
      onColorChange={onColorChange}
      openedMenu={openedMenu}
      openMenu={openMenu}
    />
  );

  ReactDOM.render(e, document.createElement('div'));
});
