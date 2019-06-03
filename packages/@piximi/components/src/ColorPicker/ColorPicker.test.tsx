import { Category } from '@piximi/types';
import { shallow } from 'enzyme';
import * as React from 'react';

import { ColorPicker, unusedColors, usedColors } from './ColorPicker';

it('unusedColors', () => {
  const categories: Category[] = [
    {
      description: 'example',
      identifier: '11111111-1111-1111-1111-11111111111',
      index: 1,
      visualization: {
        color: '#F44336',
        visible: true
      }
    }
  ];

  const actual = unusedColors(categories);

  const expected = [
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#9E9E9E',
    '#607D8B'
  ];

  expect(actual).toStrictEqual(expected);
});

it('usedColors', () => {
  const categories: Category[] = [
    {
      description: 'example',
      identifier: '11111111-1111-1111-1111-11111111111',
      index: 1,
      visualization: {
        color: '#F44336',
        visible: true
      }
    }
  ];

  const actual = usedColors(categories);

  const expected = ['#F44336'];

  expect(actual).toStrictEqual(expected);
});

it('ColorPicker', () => {
  const categories: Category[] = [
    {
      description: 'example',
      identifier: '11111111-1111-1111-1111-11111111111',
      index: 1,
      visualization: {
        color: '#F44336',
        visible: true,
      }
    }
  ];

  const onChange = () => {};

  const e = <ColorPicker categories={categories} onChange={onChange} />;

  shallow(e);
});
