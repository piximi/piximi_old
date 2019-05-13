import React from 'react';

import { storiesOf } from '@storybook/react';

import { Snackbar } from "..";

const closeSnackbar = () => {};

const message = '';

const openedSnackbar = true;

storiesOf('Snackbar', module)
  .add('example', () => (
    <Snackbar
      closeSnackbar={closeSnackbar}
      message={message}
      openedSnackbar={openedSnackbar}
    />
  ));
