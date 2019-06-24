import { useDrag } from 'react-dnd';
import React from 'react';

type ImageDragSourceProps = {
  children: React.ReactNode;
  selectedItems: any;
  onmousedown: any;
  item: any;
};

/**
 *
 * @param props
 * @constructor
 */
export const ImageDragSource = (props: ImageDragSourceProps) => {
  const { children, selectedItems, onmousedown, item } = props;
  const spec = {
    item: {
      selectedItems: selectedItems,
      type: 'image'
    }
  };

  const [, dragSource] = useDrag(spec);

  const selected = selectedItems.includes(item.identifier);

  return (
    <div
      className={selected ? 'selected' : 'unselected'}
      key={'div' + item.identifier}
      onMouseDown={() => onmousedown(item.identifier)}
      ref={dragSource}
    >
      {children}
    </div>
  );
};
