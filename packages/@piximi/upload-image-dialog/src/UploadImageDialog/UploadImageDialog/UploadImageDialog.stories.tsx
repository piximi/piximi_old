import * as React from 'react';
import { useDialog } from '@piximi/hooks';
import { storiesOf } from '@storybook/react';
import { UploadImageDialog } from './UploadImageDialog';

storiesOf('UploadImageDialog', module).add('example', () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <>
      <button onClick={openDialog}>Upload image</button>

      <UploadImageDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
      />
    </>
  );
});
