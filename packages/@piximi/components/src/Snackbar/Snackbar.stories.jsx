import React from 'react';

import { storiesOf } from '@storybook/react';

import { Snackbar } from "..";

storiesOf('Snackbar', module)
  .add('example', () => (
    <Snackbar closeSnackbar={} message={} openedSnackbar={}/>
  ));
