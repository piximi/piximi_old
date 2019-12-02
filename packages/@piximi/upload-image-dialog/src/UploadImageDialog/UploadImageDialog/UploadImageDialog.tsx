import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import '@uppy/url/dist/style.css';
import '@uppy/url/dist/style.css';
import '@uppy/webcam/dist/style.css';
import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dropbox from '@uppy/dropbox';
import GoogleDrive from '@uppy/google-drive';
import Uppy from '@uppy/core';
import Url from '@uppy/url';
import Webcam from '@uppy/webcam';
import { Dashboard } from '@uppy/react';

type UploadImageDialogProps = {
  closeDialog: () => void;
  openedDialog: boolean;
};

const uppy = Uppy();

uppy.use(Dropbox, {
  companionUrl: 'https://companion.uppy.io/',
  locale: {}
});

uppy.use(GoogleDrive, {
  companionUrl: 'https://companion.uppy.io/',
  locale: {}
});

uppy.use(Url, {
  companionUrl: 'https://companion.uppy.io/',
  locale: {}
});

uppy.use(Webcam, {});

const plugins = ['Dropbox', 'GoogleDrive', 'Url', 'Webcam'];

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
