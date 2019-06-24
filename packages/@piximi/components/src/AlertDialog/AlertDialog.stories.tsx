import React from 'react';

import { storiesOf } from '@storybook/react';

import { AlertDialog } from '..';

const onClose = () => {};

const open = true;

storiesOf('AlertDialog', module).add('example', () => (
  <AlertDialog onClose={onClose} open={open}>
    <div />
  </AlertDialog>
));
