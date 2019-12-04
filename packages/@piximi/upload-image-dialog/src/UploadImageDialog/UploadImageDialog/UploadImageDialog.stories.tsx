import * as React from 'react';
import { useDialog } from '@piximi/hooks';
import { storiesOf } from '@storybook/react';
import { UploadImageDialog } from './UploadImageDialog';

storiesOf('UploadImageDialog', module).add('example', () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const createImage = (
    checksum: string,
    data: string,
    identifier: string
  ) => {};

  return (
    <>
      <button onClick={openDialog}>Upload image</button>

      <UploadImageDialog
        closeDialog={closeDialog}
        createImage={createImage}
        openedDialog={openedDialog}
      />
    </>
  );
});
