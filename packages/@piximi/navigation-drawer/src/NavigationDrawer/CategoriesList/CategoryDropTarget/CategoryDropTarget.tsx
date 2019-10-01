import { Category } from '@piximi/types';
import { useDrop } from 'react-dnd';
import * as React from 'react';

type CategoryDropTargetProps = {
  category: Category;
  children: React.ReactNode;
  updateImagesCategory: (
    identifiers: string[],
    categoryIdentifier: string
  ) => void;
};

export const CategoryDropTarget = (props: CategoryDropTargetProps) => {
  const { category, children, updateImagesCategory } = props;

  const drop = React.useCallback(
    droppedItem => {
      updateImagesCategory(droppedItem.selectedItems, category.identifier);
    },
    [category.identifier, updateImagesCategory]
  );

  const spec = {
    accept: 'image',
    drop: drop
  };

  const [, dropTarget] = useDrop(spec);

  return <div ref={dropTarget}>{children}</div>;
};
