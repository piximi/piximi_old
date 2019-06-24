import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoryListItemMenuList } from './CategoryListItemMenuList';
import { Category } from '@piximi/types';

const category: Category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

const closeMenu = () => {};

storiesOf('CategoryListItemMenuList', module).add('example', () => (
  <CategoryListItemMenuList
    anchorEl={null}
    categories={[category]}
    category={category}
    closeMenu={closeMenu}
    openedMenu={true}
  />
));
