import { Category } from '@cytoai/types';
import ReactDOM from 'react-dom';
import * as React from 'react';

import CategoryDropTarget from './CategoryDropTarget';

it('renders without crashing', () => {
  const category: Category = {
    color: '',
    description: '',
    identifier: '',
    index: 0,
    visible: true
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

  ReactDOM.render(e, document.createElement('div'));
});
