import { Category } from '@piximi/types';
import { CirclePicker } from 'react-color';
import * as React from 'react';

type Props = {
  categories: Category[];
  colors: string[];
  onChange: any;
};

/**
 *
 * @param categories
 */
export const unusedColors = (categories: Category[], colors: string[]): string[] | [] => {
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
  const { categories, colors, onChange } = props;

  const unused: string[] = unusedColors(categories, colors);

  return <CirclePicker colors={unused} onChange={onChange} />;
};
