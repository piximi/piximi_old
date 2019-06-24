import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import { useTranslation } from 'react-i18next';
import { AlertSnackbar } from '@piximi/components';
import { useSnackbar } from '@piximi/hooks';

export const EvaluateListItem = () => {
  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const { t: translation } = useTranslation();

  const evaluate = async () => {
    openSnackbar();
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={evaluate}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Evaluate')} />
      </ListItem>

      <AlertSnackbar
        closeSnackbar={closeSnackbar}
        message={`Loss: ${0}, Accuracy: ${0}`}
        openedSnackbar={openedSnackbar}
      />
    </React.Fragment>
  );
};
