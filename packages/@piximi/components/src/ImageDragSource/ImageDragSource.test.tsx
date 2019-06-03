import { shallow } from 'enzyme';
import * as React from 'react';

import { ImageDragSource } from './ImageDragSource';

it('ImageDragSource', () => {
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

  shallow(e);
});
