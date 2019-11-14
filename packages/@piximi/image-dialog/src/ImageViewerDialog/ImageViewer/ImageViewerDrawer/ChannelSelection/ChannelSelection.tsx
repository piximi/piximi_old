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
import { blue, green, red } from '@material-ui/core/colors';
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

type ChannelSelectionProps = {
  channels: { r: boolean; g: boolean; b: boolean };
  setChannels: (channels: { r: boolean; g: boolean; b: boolean }) => void;
};

export const ChannelSelection = (props: ChannelSelectionProps) => {
  const { channels, setChannels } = props;

  const [rCheckboxChecked, setRCheckboxChecked] = useState(true);
  const [gCheckboxChecked, setGCheckboxChecked] = useState(true);
  const [bCheckboxChecked, setBCheckboxChecked] = useState(true);

  const onRCheckboxChange = () => {
    setRCheckboxChecked(!rCheckboxChecked);

    setChannels({ ...channels, r: !rCheckboxChecked });
  };

  const onGCheckboxChange = () => {
    setGCheckboxChecked(!gCheckboxChecked);

    setChannels({ ...channels, g: !gCheckboxChecked });
  };

  const onBCheckboxChange = () => {
    setBCheckboxChecked(!bCheckboxChecked);

    setChannels({ ...channels, b: !bCheckboxChecked });
  };

  const rControl = (
    <RedCheckbox
      // @ts-ignore
      checked={rCheckboxChecked}
      onChange={onRCheckboxChange}
      classes={{}}
      value="checkedG"
    />
  );

  const bControl = (
    <BlueCheckbox
      // @ts-ignore
      checked={bCheckboxChecked}
      onChange={onBCheckboxChange}
      value="checkedG"
    />
  );

  const gControl = (
    <GreenCheckbox
      // @ts-ignore
      checked={gCheckboxChecked}
      onChange={onGCheckboxChange}
      value="checkedG"
    />
  );

  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <FormControlLabel control={rControl} label="Red" />
        </ListItemIcon>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <FormControlLabel control={gControl} label="Green" />
        </ListItemIcon>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem role={undefined} dense button onClick={() => {}}>
        <ListItemIcon>
          <FormControlLabel control={bControl} label="Blue" />
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
