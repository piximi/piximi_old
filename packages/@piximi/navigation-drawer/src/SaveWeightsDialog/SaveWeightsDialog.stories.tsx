import React from 'react';
import { storiesOf } from '@storybook/react';
import { SaveWeightsDialog } from './SaveWeightsDialog';

const onClose = () => {};

storiesOf('SaveWeightsDialog', module).add('example', () => (
  <SaveWeightsDialog onClose={onClose} open />
));
