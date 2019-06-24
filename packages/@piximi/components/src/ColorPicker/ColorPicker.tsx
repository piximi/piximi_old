import { Category } from '@piximi/types';
import { CirclePicker } from 'react-color';
import * as React from 'react';

type ColorPickerProps = {
  categories: Category[];
  colors: string[];
  onChange: any;
};

/**
 *
 * @param categories
 * @param colors
 */
export const unusedColors = (
  categories: Category[],
  colors: string[]
): string[] | [] => {
  return colors.filter(color => {
    return !usedColors(categories).includes(color.toUpperCase());
  });
};

/**
 *
 * @param categories
 */
export const usedColors = (categories: Category[]): string[] => {
  return categories.map((category: Category) => {
    return category.visualization.color.toUpperCase();
  });
};

/**
 *
 * @param props
 * @constructor
 */
export const ColorPicker = (props: ColorPickerProps) => {
  const { categories, colors, onChange } = props;

  const unused: string[] = unusedColors(categories, colors);

  return <CirclePicker colors={unused} onChange={onChange} />;
};
