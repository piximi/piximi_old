import Dexie from 'dexie';
import { Plugin, Uppy, UppyFile } from '@uppy/core';

interface Entry {
  id?: number;
  data: Blob | File;
}

class Database extends Dexie {
  files: Dexie.Table<Entry, number>;

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

export class IndexedDB extends Plugin {
  database: Database;
  databaseName: string;
  id: string;
  tableName: string;
  type: string;
  versionNumber: number;

  constructor(uppy: Uppy, options: IndexedDBOptions) {
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

    this.uploader = this.uploader.bind(this);
  }

  install() {
    this.uppy.addUploader(this.uploader);
  }

  uninstall() {
    this.uppy.removeUploader(this.uploader);
  }

  private uploader(identifiers: Array<string>) {
    identifiers.forEach(identifier => {
      const file = this.uppy.getFile(identifier);

      this.uppy.emit('preprocess-progress', file, {
        mode: 'determinate',
        message: 'preparingUpload',
        value: 0
      });
    });

    const promises = identifiers.map(identifier => {
      const file: UppyFile = this.uppy.getFile(identifier);

      const item: Entry = {
        data: file.data
      };

      const emit = () => {
        this.uppy.emit('preprocess-progress', file, {
          mode: 'determinate',
          message: 'preparingUpload',
          value: 1
        });
      };

      return this.database.files.add(item).then(emit);
    });

    return Promise.all(promises).then(() => {
      identifiers.forEach(identifier => {
        const file = this.uppy.getFile(identifier);

        this.uppy.emit('preprocess-complete', file);
      });
    });
  }
}
