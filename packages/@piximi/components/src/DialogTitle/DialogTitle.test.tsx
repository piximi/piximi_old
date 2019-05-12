import ReactDOM from 'react-dom';
import * as React from 'react';

import DialogTitle from './DialogTitle';

it('renders without crashing', () => {
  const title = '';

  const e = <DialogTitle title={title} />;

  ReactDOM.render(e, document.createElement('div'));
});
