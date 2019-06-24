import { shallow } from 'enzyme';
import * as React from 'react';

import { AlertDialog } from './AlertDialog';

it('AlertDialog', () => {
  const open = true;

  const onClose = () => {};

  const e = (
    <AlertDialog open={open} onClose={onClose}>
      <div />
    </AlertDialog>
  );

  shallow(e);
});
