import {shallow} from "enzyme";
import * as React from "react";
import {UploadImageDialog} from "./UploadImageDialog";

const closeDialog = () => {};

const createImage = (checksum: string, data: string, identifier: string) => {};

it("UploadImageDialog", () => {
  shallow(
    <UploadImageDialog
      closeDialog={closeDialog}
      createImage={createImage}
      openedDialog
    />
  );
});
