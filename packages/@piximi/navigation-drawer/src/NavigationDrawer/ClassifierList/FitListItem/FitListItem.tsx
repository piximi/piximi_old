import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import { useTranslation } from 'react-i18next';
import { useDialog } from '@piximi/hooks';
import { FitClassifierDialog } from '../../../FitClassifierDialog/FitClassifierDialog';

export const FitListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t: translation } = useTranslation();

  const fit = async () => {
    openDialog();
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={fit}>
        <ListItemIcon>
          <ScatterPlotIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Fit')} />
      </ListItem>

      <FitClassifierDialog
        categories={[]}
        closeDialog={closeDialog}
        images={[]}
        openedDialog={openedDialog}
        openedDrawer={true}
      />
    </React.Fragment>
  );
};
