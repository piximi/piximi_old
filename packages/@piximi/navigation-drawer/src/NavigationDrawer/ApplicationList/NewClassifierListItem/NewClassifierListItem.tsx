import {ListItem, ListItemIcon, ListItemText, Paper} from "@material-ui/core";
import * as React from "react";
import AddIcon from "@material-ui/icons/Add";
import {useDialog} from "@piximi/hooks";
import {ConnectedNewClassifierDialog} from "../../../NewClassifierDialog/ConnectedNewClassifierDialog";

export const NewClassifierListItem = () => {
  const {openedDialog, openDialog, closeDialog} = useDialog();

  return (
    // @ts-ignore
    <React.Fragment>
      <ListItem button dense onClick={openDialog}>
        // @ts-ignore
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        // @ts-ignore
        <ListItemText primary="New classifier…" />
      </ListItem>
      // @ts-ignore
      <ConnectedNewClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
      />
    </React.Fragment>
  );
};
