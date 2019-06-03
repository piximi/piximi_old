import { shallow } from 'enzyme';
import * as React from 'react';

import { DialogContent } from './DialogContent';

it('DialogContent', () => {
  const e = (
    <DialogContent>
      <div />
    </DialogContent>
  );

  shallow(e);
});
