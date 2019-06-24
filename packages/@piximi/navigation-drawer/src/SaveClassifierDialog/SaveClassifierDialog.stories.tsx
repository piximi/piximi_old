import React from 'react';
import { storiesOf } from '@storybook/react';
import { SaveClassifierDialog } from './SaveClassifierDialog';
import { Classifier } from '@piximi/types';

const classifier: Classifier = {
  categories: [],
  images: [],
  name: 'example'
};

const onClose = () => {};

storiesOf('SaveClassifierDialog', module).add('example', () => (
  <SaveClassifierDialog classifier={classifier} onClose={onClose} open />
));
