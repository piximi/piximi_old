import React from 'react';
import { storiesOf } from '@storybook/react';
import { HelpDialog } from './HelpDialog';

const onClose = () => {};

storiesOf('HelpDialog', module).add('example', () => (
  <HelpDialog onClose={onClose} open />
));
