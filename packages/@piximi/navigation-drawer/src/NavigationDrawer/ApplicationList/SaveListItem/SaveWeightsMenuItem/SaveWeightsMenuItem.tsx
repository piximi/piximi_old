import * as React from 'react';

import { useDialog } from '@piximi/hooks';
import { SaveWeightsDialog } from '../../../../SaveWeightsDialog';
import { ListItemText, MenuItem } from '@material-ui/core';

export const SaveWeightsMenuItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <MenuItem onClick={openDialog}>
        <ListItemText primary="Save weights" />
      </MenuItem>

      <SaveWeightsDialog open={openedDialog} onClose={closeDialog} />
    </React.Fragment>
  );
};
