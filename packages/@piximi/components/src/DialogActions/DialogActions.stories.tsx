import React from 'react';

import { storiesOf } from '@storybook/react';

import { DialogActions } from '..';

const acceptanceTitle = '';

const cancellationTitle = '';

const onAcceptance = () => {};

const onCancellation = () => {};

storiesOf('DialogActions', module).add('example', () => (
  <DialogActions
    acceptanceTitle={acceptanceTitle}
    cancellationTitle={cancellationTitle}
    onAcceptance={onAcceptance}
    onCancellation={onCancellation}
  />
));
