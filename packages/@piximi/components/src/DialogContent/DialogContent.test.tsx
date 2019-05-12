import ReactDOM from 'react-dom';
import * as React from 'react';

import DialogContent from './DialogContent';

it('renders without crashing', () => {
  const e = (
    <DialogContent>
      <div />
    </DialogContent>
  );

  ReactDOM.render(e, document.createElement('div'));
});
