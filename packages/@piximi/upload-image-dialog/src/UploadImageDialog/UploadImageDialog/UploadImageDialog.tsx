import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import * as React from 'react';
import Uppy from '@uppy/core';
import { DashboardModal } from '@uppy/react';
import { IndexedDB } from './IndexedDB';

type ReduxOptions = {
  id?: string;
  createImage: (checksum: string, data: string, identifier: string) => void;
};

class UpdateRedux extends Uppy.Plugin {
  createImage: (checksum: string, data: string, identifier: string) => void;

  constructor(uppy: Uppy.Uppy, options: ReduxOptions) {
    super(uppy, options);

    this.createImage = options.createImage;
    this.id = options.id || 'UpdateRedux';
    this.type = 'modifier';

    this.create = this.create.bind(this);

    this.postprocessor = this.postprocessor.bind(this);
  }

  create(image: Uppy.UppyFile) {
    this.createImage('', '', '');
  }

  postprocessor(identifiers: Array<string>) {
    const promises = identifiers.map(identifier => {
      const file = this.uppy.getFile(identifier);

      this.create(file);
    });

    return Promise.all(promises);
  }

  install() {
    this.uppy.addPostProcessor(this.postprocessor);
  }

  uninstall() {
    this.uppy.removePreProcessor(this.postprocessor);
  }
}

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

  uppy.use(UpdateRedux, {
    createImage: createImage
  });

  const plugins: Array<string> = ['IndexedDB', 'UpdateRedux'];

  return (
    <DashboardModal
      onRequestClose={closeDialog}
      open={openedDialog}
      plugins={plugins}
      uppy={uppy}
    />
  );
};
