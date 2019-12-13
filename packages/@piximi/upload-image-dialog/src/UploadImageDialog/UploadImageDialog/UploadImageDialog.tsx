import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import * as React from "react";
import Uppy from "@uppy/core";
import {DashboardModal} from "@uppy/react";
import {UpdateReduxStore} from "./UpdateReduxStore";

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

  uppy.use(UpdateReduxStore, {
    createImage: createImage
  });

  const plugins: Array<string> = ["UpdateReduxStore"];

  return (
    <DashboardModal
      onRequestClose={closeDialog}
      open={openedDialog}
      plugins={plugins}
      uppy={uppy}
    />
  );
};
