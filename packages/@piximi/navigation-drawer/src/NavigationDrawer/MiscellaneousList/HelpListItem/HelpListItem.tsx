import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import * as React from "react";
import HelpIcon from "@material-ui/icons/Help";

export const HelpListItem = () => {
  return (
    // @ts-ignore
    <React.Fragment>
      <ListItem dense disabled button>
        // @ts-ignore
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>
        // @ts-ignore
        <ListItemText primary="Help" />
      </ListItem>
    </React.Fragment>
  );
};
