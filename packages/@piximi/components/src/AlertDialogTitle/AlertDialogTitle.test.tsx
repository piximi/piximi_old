import { shallow } from 'enzyme';
import * as React from 'react';

import { AlertDialogTitle } from './AlertDialogTitle';

it('AlertDialogTitle', () => {
  const title = '';

  const e = <AlertDialogTitle title={title} />;

  shallow(e);
});
