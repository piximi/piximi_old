import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import * as React from 'react';
import Uppy from '@uppy/core';
import { DashboardModal } from '@uppy/react';
import { IndexedDB } from './IndexedDB';

type UploadImageDialogProps = {
  closeDialog: () => void;
  createImage: (checksum: string, data: string, identifier: string) => void;
  openedDialog: boolean;
};

export const UploadImageDialog = ({
  closeDialog,
  createImage,
  openedDialog
}: UploadImageDialogProps) => {
  const uppy = new Uppy.Uppy();

  uppy.use(IndexedDB, {
    databaseName: 'piximi-images',
    tableName: 'images',
    versionNumber: 1
  });

  const plugins: Array<string> = ['IndexedDB'];

  return (
    <DashboardModal
      onRequestClose={closeDialog}
      open={openedDialog}
      plugins={plugins}
      uppy={uppy}
    />
  );
};
