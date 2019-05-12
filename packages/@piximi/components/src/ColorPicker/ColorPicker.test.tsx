import { Category } from '@cytoai/types';
import ReactDOM from 'react-dom';
import * as React from 'react';

import ColorPicker from './ColorPicker';

it('renders without crashing', () => {
  const categories: Category[] = [];

  const onChange = () => {};

  const e = <ColorPicker categories={categories} onChange={onChange} />;

  ReactDOM.render(e, document.createElement('div'));
});
