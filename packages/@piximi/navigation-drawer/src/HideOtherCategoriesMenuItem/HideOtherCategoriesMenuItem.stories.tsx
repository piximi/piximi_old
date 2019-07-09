import React from 'react';
import { storiesOf } from '@storybook/react';
import { HideOtherCategoriesMenuItem } from './HideOtherCategoriesMenuItem';
import { Category, Classifier, Image } from '@piximi/types';

const category: Category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

const categories: Category[] = [];
const images: Image[] = [];
const name: string = 'test';

const classifier: Classifier = {
  categories,
  images,
  name
};

const closeMenu = () => {};

const makeCategoryInvisible = (
  categoryIdentifier: string,
  visibility: boolean
) => {};

storiesOf('HideOtherCategoriesMenuItem', module).add('example', () => (
  <HideOtherCategoriesMenuItem
    classifier={classifier}
    categoryProp={category}
    closeMenu={closeMenu}
    makeCategoryInvisible={makeCategoryInvisible}
  />
));
