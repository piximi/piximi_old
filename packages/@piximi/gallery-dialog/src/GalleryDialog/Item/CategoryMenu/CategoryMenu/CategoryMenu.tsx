import * as React from 'react';
import { Menu } from '@material-ui/core';

type CategoryMenuProps = {
  anchorEl: null;
  closeMenu: () => void;
  openedMenu: boolean;
};

export const CategoryMenu = ({
  anchorEl,
  closeMenu,
  openedMenu
}: CategoryMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id="category-menu"
      keepMounted
      onClose={closeMenu}
      open={openedMenu}
    ></Menu>
  );
};
