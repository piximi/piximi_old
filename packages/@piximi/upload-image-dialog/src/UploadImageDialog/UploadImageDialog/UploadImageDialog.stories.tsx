import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { UploadImageDialog } from './UploadImageDialog';

const closeDialog = () => {};

storiesOf('UploadImageDialog', module).add('example', () => {
  return <UploadImageDialog closeDialog={closeDialog} openedDialog />;
});
