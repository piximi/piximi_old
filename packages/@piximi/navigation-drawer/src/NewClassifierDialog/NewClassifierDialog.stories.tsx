import * as React from "react";
import {storiesOf} from "@storybook/react";
import {NewClassifierDialog} from "./NewClassifierDialog";

const openClassifier = () => {};

const closeDialog = () => {};

storiesOf("NewClassifierDialog", module).add("example", () => (
  <NewClassifierDialog
    openProject={openClassifier}
    closeDialog={closeDialog}
    openedDialog={true}
  />
));
