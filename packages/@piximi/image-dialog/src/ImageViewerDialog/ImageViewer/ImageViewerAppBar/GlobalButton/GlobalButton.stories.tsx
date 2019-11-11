import React from 'react';

import { storiesOf } from '@storybook/react';
import { GlobalButton } from './GlobalButton';

storiesOf('GlobalButton', module).add('GlobalButton', () => {
  return <GlobalButton />;
});
