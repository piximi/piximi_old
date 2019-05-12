import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from 'react-dnd';
const { useDrag } = dnd;
import React from 'react';

type Props = {
  children: React.ReactNode;
  selectedItems: any;
  onmousedown: any;
  item: any;
};

const ImageDragSource = (props: Props) => {
  const { children, selectedItems, onmousedown, item } = props;

  const spec = {
    item: {
      id: item.identifier,
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

export default ImageDragSource;
