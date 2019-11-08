import React from 'react';

import { storiesOf } from '@storybook/react';
import { BackButton } from './BackButton';

const onClose = () => {};

storiesOf('BackButton', module).add('BackButton', () => {
  return <BackButton onClose={onClose} />;
});
