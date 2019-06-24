import React from 'react';

import { storiesOf } from '@storybook/react';

import { AlertDialog, AlertDialogActions } from '..';

const acceptanceTitle: string = 'OK';

const cancellationTitle: string = 'Cancel';

const open: boolean = true;

const onAcceptance = () => {};

const onCancellation = () => {};

const onClose = () => {};

storiesOf('AlertDialogActions', module).add('example', () => (
  <AlertDialog onClose={onClose} open={open}>
    <AlertDialogActions
      acceptanceTitle={acceptanceTitle}
      cancellationTitle={cancellationTitle}
      onAcceptance={onAcceptance}
      onCancellation={onCancellation}
    />
  </AlertDialog>
));
