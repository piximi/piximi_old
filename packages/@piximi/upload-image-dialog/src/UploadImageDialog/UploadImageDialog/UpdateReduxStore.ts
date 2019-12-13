import * as ImageJS from "image-js";
import md5 from "crypto-js/md5";
import {Plugin, Uppy, UppyFile} from "@uppy/core";

type UpdateReduxStoreOptions = {
  createImage: (checksum: string, data: string, identifier: string) => void;
  id?: string;
};

export class UpdateReduxStore extends Plugin {
  createImage: (checksum: string, data: string, identifier: string) => void;
  id: string;
  type: string;

  constructor(uppy: Uppy, options: UpdateReduxStoreOptions) {
    super(uppy, options);

    this.createImage = options.createImage;
    this.id = options.id || "UpdateReduxStore";
    this.type = "uploader";

    this.uploader = this.uploader.bind(this);
  }

  install() {
    this.uppy.addUploader(this.uploader);
  }

  uninstall() {
    this.uppy.removeUploader(this.uploader);
  }

  private uploader(identifiers: Array<string>) {
    identifiers.forEach((identifier) => {
      const file: UppyFile = this.uppy.getFile(identifier);

      this.uppy.emit("preprocess-progress", file, {
        mode: "determinate",
        message: "preparingUpload",
        value: 0
      });
    });

    const updateStore = (file: UppyFile) => {
      const data: string = URL.createObjectURL(file.data);

      return ImageJS.Image.load(data).then((image: ImageJS.Image) => {
        const data: string = image.toDataURL();

        const checksum: string = md5(data).toString();

        this.createImage(checksum, data, "");
      });
    };

    const promises = identifiers.map((identifier) => {
      const image: UppyFile = this.uppy.getFile(identifier);

      const emit = () => {
        this.uppy.emit("preprocess-progress", image, {
          mode: "determinate",
          message: "preparingUpload",
          value: 1
        });
      };

      return updateStore(image).then(emit);
    });

    return Promise.all(promises).then(() => {
      identifiers.forEach((identifier) => {
        const file: UppyFile = this.uppy.getFile(identifier);

        this.uppy.emit("preprocess-complete", file);
      });
    });
  }
}
