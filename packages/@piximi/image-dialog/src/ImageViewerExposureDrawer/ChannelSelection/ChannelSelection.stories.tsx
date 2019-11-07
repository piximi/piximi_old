import React from 'react';

import { storiesOf } from '@storybook/react';
import { ChannelSelection } from './ChannelSelection';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import List from '@material-ui/core/List';

storiesOf('ChannelSelection', module).add('ChannelSelection', () => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <Checkbox edge="start" checked={true} tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText id={''} primary={`Line item`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <Checkbox edge="start" checked={true} tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText id={''} primary={`Line item`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
});
