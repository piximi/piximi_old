import React from 'react';

import { storiesOf } from '@storybook/react';

import { DialogActions } from "..";

storiesOf('DialogActions', module)
  .add('example', () => (
    <DialogActions
      acceptanceTitle={}
      cancellationTitle={}
      onAcceptance={}
      onCancellation={}
    />
  ));
