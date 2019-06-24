import { SnackbarOrigin } from '@material-ui/core/Snackbar';
import * as React from 'react';
import { Snackbar } from '@material-ui/core';

type AlertSnackbarProps = {
  closeSnackbar: () => void;
  message: string;
  openedSnackbar: boolean;
};

/**
 *
 * @param props
 * @constructor
 */
export const AlertSnackbar = (props: AlertSnackbarProps) => {
  const { closeSnackbar, message, openedSnackbar } = props;

  const anchorOrigin: SnackbarOrigin = {
    horizontal: 'left',
    vertical: 'bottom'
  };

  return (
    <Snackbar
      action={[]}
      anchorOrigin={anchorOrigin}
      autoHideDuration={6000}
      message={<span id="message-id">{message}</span>}
      onClose={closeSnackbar}
      open={openedSnackbar}
    />
  );
};
