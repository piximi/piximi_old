import * as React from 'react';

import { useDialog } from '@piximi/hooks';
import { SaveAnnotationsAndPredictionsDialog } from '../../../../index';
import { ListItemText, MenuItem } from '@material-ui/core';

export const SaveAnnotationsAndPredictionsMenuItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <MenuItem onClick={openDialog}>
        <ListItemText primary="Save annotations and predictions" />
      </MenuItem>

      <SaveAnnotationsAndPredictionsDialog
        open={openedDialog}
        onClose={closeDialog}
      />
    </React.Fragment>
  );
};
