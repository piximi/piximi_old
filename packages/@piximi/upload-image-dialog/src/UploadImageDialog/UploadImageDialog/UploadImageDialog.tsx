import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import Dexie from 'dexie';

interface ImageEntry {
  id?: number;
  data: Blob | File;
}

class ImageDatabase extends Dexie {
  images: Dexie.Table<ImageEntry, number>;

  constructor() {
    super('ImageDatabase');

    const schema = {
      images: '++id, data'
    };

    this.version(1).stores(schema);

    this.images = this.table('images');
  }
}

class IndexedDB extends Uppy.Plugin {
  id: string;
  type: string;

  constructor(uppy: Uppy.Uppy, options: any) {
    super(uppy, options);

    this.id = options.id || 'IndexedDB';
    this.type = 'uploader';

    this.preprocess = this.preprocess.bind(this);
    this.upload = this.upload.bind(this);
    this.postprocess = this.postprocess.bind(this);
  }

  preprocess(identifiers: Array<string>) {
    return Promise.resolve();
  }

  upload(identifiers: Array<string>) {
    const imageDatabase = new ImageDatabase();

    const promises = identifiers.map(identifier => {
      const data: Blob | File = this.uppy.getFile(identifier).data;

      return imageDatabase.images.add({
        data: data
      });
    });

    return Promise.all(promises);
  }

  postprocess(identifiers: Array<string>) {
    return Promise.resolve();
  }

  install() {
    this.uppy.addPreProcessor(this.preprocess);
    this.uppy.addUploader(this.upload);
    this.uppy.addPostProcessor(this.upload);
  }

  uninstall() {
    this.uppy.removePreProcessor(this.preprocess);
    this.uppy.removeUploader(this.upload);
    this.uppy.removePostProcessor(this.postprocess);
  }
}

const uppy = new Uppy.Uppy();

uppy.use(IndexedDB, {});

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
