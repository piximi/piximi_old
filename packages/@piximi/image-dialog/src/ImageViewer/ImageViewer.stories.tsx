import React from 'react';

import { storiesOf } from '@storybook/react';
import { ConnectedImageViewer } from './ConnectedImageViewer';

storiesOf('ImageViewer', module).add('ImageViewer', () => {
  return <ConnectedImageViewer />;
});
