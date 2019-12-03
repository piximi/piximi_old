import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import { IndexedDB } from './IndexedDB';

const uppy = new Uppy.Uppy();

uppy.use(IndexedDB, {
  databaseName: 'piximi-images',
  tableName: 'images',
  versionNumber: 1
});

const plugins: Array<string> = ['IndexedDB'];

type UploadImageDialogProps = {
  closeDialog: () => void;
  openedDialog: boolean;
};

export const UploadImageDialog = ({
  closeDialog,
  openedDialog
}: UploadImageDialogProps) => {
  return (
    <Dialog onClose={closeDialog} open={openedDialog}>
      <DialogTitle>Upload image</DialogTitle>

      <Dashboard plugins={plugins} uppy={uppy} />
    </Dialog>
  );
};
