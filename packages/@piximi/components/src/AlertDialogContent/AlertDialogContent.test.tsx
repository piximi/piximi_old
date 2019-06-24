import { shallow } from 'enzyme';
import * as React from 'react';

import { AlertDialogContent } from './AlertDialogContent';

it('AlertDialogContent', () => {
  const e = (
    <AlertDialogContent>
      <div />
    </AlertDialogContent>
  );

  shallow(e);
});
