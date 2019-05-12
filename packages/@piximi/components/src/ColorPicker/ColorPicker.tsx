import { Category } from '@cytoai/types';
import { CirclePicker } from 'react-color';
import * as React from 'react';

type Props = {
  categories: Category[];
  onChange: any;
};

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#9e9e9e',
  '#607d8b'
];

const unusedColors = (categories: Category[]): string[] | [] => {
  return colors.filter((color: string) => {
    const s: string = color.toUpperCase();

    return !usedColors(categories).includes(s);
  });
};

const usedColors = (categories: Category[]): string[] | [] => {
  if (categories) {
    return categories.map((category: Category) => {
      return category.color.toUpperCase();
    });
  } else {
    return [];
  }
};

const ColorPicker = (props: Props) => {
  const { onChange, categories } = props;

  const colors: string[] = unusedColors(categories);

  return <CirclePicker colors={colors} onChange={onChange} />;
};

export default ColorPicker;
