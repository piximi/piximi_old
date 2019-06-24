import React from 'react';

import { storiesOf } from '@storybook/react';

import { SaveAnnotationsAndPredictionsDialog } from './SaveAnnotationsAndPredictionsDialog';

const onClose = () => {};

storiesOf('SaveAnnotationsAndPredictionsDialog', module).add('example', () => (
  <SaveAnnotationsAndPredictionsDialog onClose={onClose} open />
));
