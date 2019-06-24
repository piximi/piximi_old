import * as React from 'react';
import { ListItemText, MenuItem } from '@material-ui/core';

export const OpenWeightsMenuItem = (props: any) => {
  const { closeMenu } = props;

  const onChange = () => {};

  const onClick = () => {
    closeMenu();
  };

  return (
    <React.Fragment>
      <input
        accept="*"
        id="open-weights"
        name="file"
        onChange={onChange}
        style={{ display: 'none' }}
        type="file"
      />

      <label htmlFor="open-weights">
        <MenuItem onClick={onClick}>
          <ListItemText primary="Open weights" />
        </MenuItem>
      </label>
    </React.Fragment>
  );
};
