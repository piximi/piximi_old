import React from 'react';
import { storiesOf } from '@storybook/react';
import { OpenExampleClassifierListItem } from './OpenExampleClassifierListItem';

const closeMenu = () => {};

storiesOf('OpenExampleClassifierListItem', module).add('example', () => (
  <OpenExampleClassifierListItem closeMenu={closeMenu} />
));
