import * as React from 'react';

import { useDialog } from '@piximi/hooks';
import { ConnectedSaveClassifierDialog } from '../../../../SaveClassifierDialog/ConnectedSaveClassifierDialog';
import { ListItemText, MenuItem } from '@material-ui/core';

export const SaveClassifierMenuItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <MenuItem onClick={openDialog}>
        <ListItemText primary="Save classifier" />
      </MenuItem>

      <ConnectedSaveClassifierDialog
        open={openedDialog}
        onClose={closeDialog}
      />
    </React.Fragment>
  );
};
