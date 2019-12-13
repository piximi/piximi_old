import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import * as React from "react";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import {useMenu} from "@piximi/hooks";
import {OpenMenuList} from "../OpenMenuList";

export const OpenListItem = () => {
  const {anchorEl, openedMenu, openMenu, closeMenu} = useMenu();

  return (
    // @ts-ignore
    <React.Fragment>
      <ListItem button onClick={openMenu}>
        // @ts-ignore
        <ListItemIcon>
          <FolderOpenIcon />
        </ListItemIcon>
        // @ts-ignore
        <ListItemText primary="Open" />
      </ListItem>

      <OpenMenuList
        anchorEl={anchorEl}
        closeMenu={closeMenu}
        openedMenu={openedMenu}
      />
    </React.Fragment>
  );
};
