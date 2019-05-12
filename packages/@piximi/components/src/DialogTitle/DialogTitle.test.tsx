import ReactDOM from 'react-dom';
import * as React from 'react';

import DialogTitle from './DialogTitle';

it('DialogTitle', () => {
  const title = '';

  const e = <DialogTitle title={title} />;

  ReactDOM.render(e, document.createElement('div'));
});
