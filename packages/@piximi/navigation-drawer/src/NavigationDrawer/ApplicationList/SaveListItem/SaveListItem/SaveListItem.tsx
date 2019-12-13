import * as React from "react";
import SaveIcon from "@material-ui/icons/Save";

import {useMenu} from "@piximi/hooks";
import {SaveMenuList} from "../../../index";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

export const SaveListItem = () => {
  const {anchorEl, openedMenu, openMenu, closeMenu} = useMenu();

  return (
    // @ts-ignore
    <React.Fragment>
      <ListItem button onClick={openMenu}>
        // @ts-ignore
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        // @ts-ignore
        <ListItemText primary="Save" />
      </ListItem>

      <SaveMenuList anchorEl={anchorEl} onClose={closeMenu} open={openedMenu} />
    </React.Fragment>
  );
};
