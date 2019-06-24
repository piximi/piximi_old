import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';

export const SendFeedbackListItem = () => (
  <ListItem button disabled>
    <ListItemIcon>
      <FeedbackIcon />
    </ListItemIcon>

    <ListItemText primary="Send feedback" />
  </ListItem>
);
