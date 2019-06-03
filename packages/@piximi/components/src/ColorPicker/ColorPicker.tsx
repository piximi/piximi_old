import { Category } from '@piximi/types';
import { CirclePicker } from 'react-color';
import * as React from 'react';

type Props = {
  categories: Category[];
  onChange: any;
};

export const colors = [
  '#F44336',
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

/**
 *
 * @param categories
 */
export const unusedColors = (categories: Category[]): string[] | [] => {
  return colors.filter(color => {
    // @ts-ignore
    return !usedColors(categories).includes(color.toUpperCase());
  });
};

/**
 *
 * @param categories
 */
export const usedColors = (categories: Category[]): string[] | [] => {
  if (categories) {
    return categories.map((category: Category) => {
      return category.visualization.color.toUpperCase();
    });
  } else {
    return [];
  }
};

/**
 *
 * @param props
 * @constructor
 */
export const ColorPicker = (props: Props) => {
  const { onChange, categories } = props;

  const colors: string[] = unusedColors(categories);

  return <CirclePicker colors={colors} onChange={onChange} />;
};
