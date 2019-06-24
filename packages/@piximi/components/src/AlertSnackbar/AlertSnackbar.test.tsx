import { shallow } from 'enzyme';
import * as React from 'react';

import { AlertSnackbar } from './AlertSnackbar';

it('AlertSnackbar', () => {
  const closeSnackbar = () => {};

  const message = '';

  const openedSnackbar = true;

  const e = (
    <AlertSnackbar
      closeSnackbar={closeSnackbar}
      message={message}
      openedSnackbar={openedSnackbar}
    />
  );

  shallow(e);
});
