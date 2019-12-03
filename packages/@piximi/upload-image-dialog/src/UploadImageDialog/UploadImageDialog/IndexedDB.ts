import Dexie from 'dexie';
import Uppy from '@uppy/core';

interface Table {
  id?: number;
  data: Blob | File;
}

class Database extends Dexie {
  files: Dexie.Table<Table, number>;

  constructor(databaseName: string, tableName: string, versionNumber: number) {
    super(databaseName);

    const schema = {
      images: '++id, data'
    };

    this.version(versionNumber).stores(schema);

    this.files = this.table(tableName);
  }
}

type IndexedDBOptions = {
  databaseName?: string;
  id?: string;
  tableName?: string;
  versionNumber?: number;
};

export class IndexedDB extends Uppy.Plugin {
  database: Database;
  databaseName: string;
  id: string;
  tableName: string;
  type: string;
  versionNumber: number;

  constructor(uppy: Uppy.Uppy, options: IndexedDBOptions) {
    super(uppy, options);

    this.databaseName = options.databaseName || 'uppy';
    this.id = options.id || 'IndexedDB';
    this.tableName = options.tableName || 'files';
    this.type = 'uploader';
    this.versionNumber = options.versionNumber || 1;

    this.database = new Database(
      this.databaseName,
      this.tableName,
      this.versionNumber
    );

    this.preprocess = this.preprocess.bind(this);

    this.upload = this.upload.bind(this);

    this.postprocess = this.postprocess.bind(this);
  }

  preprocess(identifiers: Array<string>) {
    return Promise.resolve();
  }

  upload(identifiers: Array<string>) {
    return Promise.all(
      identifiers.map(identifier => {
        const file: Uppy.UppyFile = this.uppy.getFile(identifier);

        this.database.files
          .add({
            data: file.data
          })
          .then(() => {
            this.uppy.emit('preprocess-progress', file, {
              mode: 'determinate',
              message: 'preparingUpload',
              value: 1
            });
          });
      })
    );

    // return Promise.all(promises).then((responses) => {
    //   identifiers.forEach((identifier) => {
    //     const file: Uppy.UppyFile = this.uppy.getFile(identifier);
    //
    //     this.uppy.emit('preprocess-complete', file)
    //   })
    // });
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
