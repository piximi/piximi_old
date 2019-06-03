import { shallow } from 'enzyme';
import * as React from 'react';

import { Dialog } from './Dialog';

it('Dialog', () => {
  const open = true;

  const onClose = () => {};

  const e = (
    <Dialog open={open} onClose={onClose}>
      <div />
    </Dialog>
  );

  shallow(e);
});
