import * as React from 'react';
import SaveIcon from '@material-ui/icons/Save';

import { useMenu } from '@piximi/hooks';
import { SaveMenuList } from '../../../index';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export const SaveListItem = () => {
  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  return (
    <React.Fragment>
      <ListItem button onClick={openMenu}>
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>

        <ListItemText primary="Save" />
      </ListItem>

      <SaveMenuList anchorEl={anchorEl} onClose={closeMenu} open={openedMenu} />
    </React.Fragment>
  );
};
