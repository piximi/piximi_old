import React from 'react';

import { storiesOf } from '@storybook/react';

import { AlertSnackbar } from '..';

const closeSnackbar = () => {};

const message = '';

const openedSnackbar = true;

storiesOf('AlertSnackbar', module).add('example', () => (
  <AlertSnackbar
    closeSnackbar={closeSnackbar}
    message={message}
    openedSnackbar={openedSnackbar}
  />
));
