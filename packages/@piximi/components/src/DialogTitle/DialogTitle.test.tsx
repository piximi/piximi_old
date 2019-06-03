import { shallow } from 'enzyme';
import * as React from 'react';

import { DialogTitle } from './DialogTitle';

it('DialogTitle', () => {
  const title = '';

  const e = <DialogTitle title={title} />;

  shallow(e);
});
