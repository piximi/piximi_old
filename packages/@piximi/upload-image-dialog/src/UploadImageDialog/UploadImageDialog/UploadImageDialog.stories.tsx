import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { UploadImageDialog } from './UploadImageDialog';

storiesOf('UploadImageDialog', module).add('example', () => {
  return <UploadImageDialog />;
});
