import { Category } from '@piximi/types';
import { useDrop } from 'react-dnd';
import * as React from 'react';

type CategoryDropTargetProps = {
  category: Category;
  children: React.ReactNode;
  updateImageCategory: (identifier: string, categoryIdentifier: string) => void;
};

/**
 *
 * @param props
 * @constructor
 */
export const CategoryDropTarget = (props: CategoryDropTargetProps) => {
  const { category, children, updateImageCategory } = props;

  const drop = React.useCallback(
    item => {
      updateImageCategory(item.id, category.identifier);
    },
    [category.identifier, updateImageCategory]
  );

  const spec = {
    accept: 'image',
    drop: drop
  };

  const [, dropTarget] = useDrop(spec);

  return <div ref={dropTarget}>{children}</div>;
};
