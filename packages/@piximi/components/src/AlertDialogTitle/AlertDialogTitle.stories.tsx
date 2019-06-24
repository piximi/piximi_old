import React from 'react';

import { storiesOf } from '@storybook/react';

import { AlertDialogTitle } from '..';

const title = '';

storiesOf('AlertDialogTitle', module).add('example', () => (
  <AlertDialogTitle title={title} />
));
