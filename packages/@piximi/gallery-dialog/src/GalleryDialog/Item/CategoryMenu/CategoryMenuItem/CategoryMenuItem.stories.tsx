import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoryMenuItem } from './CategoryMenu';

const anchorEl = null;

const closeMenu = () => {};

storiesOf('Menu', module).add('example', () => {
  return (
    <CategoryMenuItem anchorEl={anchorEl} closeMenu={closeMenu} openedMenu />
  );
});
