import * as React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {useDialog} from "@piximi/hooks";
import {useTranslation} from "react-i18next";
import {ConnectedCreateCategoryDialog} from "../../../CreateCategoryDialog/ConnectedCreateCategoryDialog";

export const CreateCategoryListItem = () => {
  const {openedDialog, openDialog, closeDialog} = useDialog();

  const {t: translation} = useTranslation();

  return (
    // @ts-ignore
    <React.Fragment>
      <ListItem button onClick={openDialog}>
        // @ts-ignore
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        // @ts-ignore
        <ListItemText primary={translation("Create category")} />
      </ListItem>

      <ConnectedCreateCategoryDialog
        onClose={closeDialog}
        open={openedDialog}
      />
    </React.Fragment>
  );
};
