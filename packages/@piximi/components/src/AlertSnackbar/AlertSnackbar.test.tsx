import { shallow } from 'enzyme';
import * as React from 'react';

import { Snackbar } from './AlertSnackbar';

it('AlertSnackbar', () => {
  const closeSnackbar = () => {};

  const message = '';

  const openedSnackbar = true;

  const e = (
    <Snackbar
      closeSnackbar={closeSnackbar}
      message={message}
      openedSnackbar={openedSnackbar}
    />
  );

  shallow(e);
});
