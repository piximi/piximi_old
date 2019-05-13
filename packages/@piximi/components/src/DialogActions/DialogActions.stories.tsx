import React from 'react';

import { storiesOf } from '@storybook/react';

import { Dialog, DialogActions } from '..';

const acceptanceTitle: string = 'OK';

const cancellationTitle: string = 'Cancel';

const open: boolean = true;

const onAcceptance = () => {};

const onCancellation = () => {};

const onClose = () => {};

storiesOf('DialogActions', module).add('example', () => (
  <Dialog onClose={onClose} open={open}>
    <DialogActions
      acceptanceTitle={acceptanceTitle}
      cancellationTitle={cancellationTitle}
      onAcceptance={onAcceptance}
      onCancellation={onCancellation}
    />
  </Dialog>
));
