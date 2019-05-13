import React from 'react';

import { storiesOf } from '@storybook/react';

import { Dialog } from '..';

const onClose = () => {};

const open = true;

storiesOf('Dialog', module).add('example', () => (
  <Dialog onClose={onClose} open={open}>
    <div />
  </Dialog>
));
