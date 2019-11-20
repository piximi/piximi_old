import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoryMenu } from './CategoryMenu';

const anchorEl = null;

const closeMenu = () => {};

storiesOf('Menu', module).add('example', () => {
  return <CategoryMenu anchorEl={anchorEl} closeMenu={closeMenu} openedMenu />;
});
