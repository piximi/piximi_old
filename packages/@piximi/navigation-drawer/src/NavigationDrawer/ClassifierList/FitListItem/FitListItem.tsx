import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '@piximi/hooks';
import { AlertSnackbar } from '@piximi/components';

export const FitListItem = () => {
  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const { t: translation } = useTranslation();

  const fit = async () => {
    openSnackbar();
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={fit}>
        <ListItemIcon>
          <ScatterPlotIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Fit')} />
      </ListItem>

      <AlertSnackbar
        closeSnackbar={closeSnackbar}
        message={''}
        openedSnackbar={openedSnackbar}
      />
    </React.Fragment>
  );
};
