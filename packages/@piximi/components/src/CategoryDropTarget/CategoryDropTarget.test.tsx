import { Category } from '@piximi/types';
import { shallow } from 'enzyme';
import * as React from 'react';

import { CategoryDropTarget } from './CategoryDropTarget';

it('CategoryDropTarget', () => {
  const category: Category = {
    description: 'example',
    identifier: '11111111-1111-1111-1111-11111111111',
    index: 1,
    visualization: {
      color: '#F44336',
      visible: true
    }
  };

  const updateImageCategory = () => {};

  const e = (
    <CategoryDropTarget
      category={category}
      updateImageCategory={updateImageCategory}
    >
      <div />
    </CategoryDropTarget>
  );

  shallow(e);
});
