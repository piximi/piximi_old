import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import * as React from "react";
import FeedbackIcon from "@material-ui/icons/Feedback";

export const SendFeedbackListItem = () => (
  <ListItem button disabled>
    // @ts-ignore
    <ListItemIcon>
      <FeedbackIcon />
    </ListItemIcon>
    // @ts-ignore
    <ListItemText primary="Send feedback" />
  </ListItem>
);
