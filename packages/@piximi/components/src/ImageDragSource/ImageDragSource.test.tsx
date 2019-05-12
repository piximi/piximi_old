import ReactDOM from 'react-dom';
import * as React from 'react';

import ImageDragSource from './ImageDragSource';

it('renders without crashing', () => {
  const item = '';

  const onmousedown = () => {};

  const selectedItems: any[] = [];

  const e = (
    <ImageDragSource
      item={item}
      onmousedown={onmousedown}
      selectedItems={selectedItems}
    >
      <div />
    </ImageDragSource>
  );

  ReactDOM.render(e, document.createElement('div'));
});
