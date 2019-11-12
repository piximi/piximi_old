import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction
} from '@material-ui/core';
import CommentIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const RedCheckbox = withStyles({
  root: {
    color: red[400],
    '&$checked': {
      color: red[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export const ChannelSelection = () => {
  const [greenCheckboxChecked, setGreenCheckboxChecked] = useState(true);

  const onGreenCheckboxChange = () => {
    setGreenCheckboxChecked(!greenCheckboxChecked);
  };
  const [redCheckboxChecked, setRedCheckboxChecked] = useState(true);

  const onRedCheckboxChange = () => {
    setRedCheckboxChecked(!redCheckboxChecked);
  };
  const [blueCheckboxChecked, setBlueCheckboxChecked] = useState(true);

  const onBlueCheckboxChange = () => {
    setBlueCheckboxChecked(!blueCheckboxChecked);
  };

  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <FormControlLabel
            control={
              <RedCheckbox
                checked={redCheckboxChecked}
                onChange={onRedCheckboxChange}
                classes={{}}
                value="checkedG"
              />
            }
            label="Red"
          />
        </ListItemIcon>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={greenCheckboxChecked}
                onChange={onGreenCheckboxChange}
                value="checkedG"
              />
            }
            label="Green"
          />
        </ListItemIcon>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <FormControlLabel
            control={
              <BlueCheckbox
                checked={blueCheckboxChecked}
                onChange={onBlueCheckboxChange}
                value="checkedG"
              />
            }
            label="Blue"
          />
        </ListItemIcon>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
