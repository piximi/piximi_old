import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import * as React from 'react';
import Uppy from '@uppy/core';
import { IndexedDB } from './IndexedDB';
import { DashboardModal } from '@uppy/react';

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
    <DashboardModal
      onRequestClose={closeDialog}
      open={openedDialog}
      plugins={plugins}
      uppy={uppy}
    />
  );
};
