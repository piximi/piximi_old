import React from 'react';

import { storiesOf } from '@storybook/react';

import { DialogTitle } from '..';

const title = '';

storiesOf('DialogTitle', module).add('example', () => (
  <DialogTitle title={title} />
));
