import ReactDOM from 'react-dom';
import * as React from 'react';

import Dialog from './Dialog';

it('renders without crashing', () => {
  const open = true;

  const onClose = () => {};

  const e = (
    <Dialog open={open} onClose={onClose}>
      <div />
    </Dialog>
  );

  ReactDOM.render(e, document.createElement('div'));
});
