import React from 'react';
import { storiesOf } from '@storybook/react';
import { OpenMenuList } from './OpenMenuList';

const anchorEl = null;

const closeMenu = () => {};

storiesOf('OpenMenuList', module).add('example', () => (
  <OpenMenuList anchorEl={anchorEl} closeMenu={closeMenu} openedMenu />
));
