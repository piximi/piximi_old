import {SnackbarOrigin} from '@material-ui/core/Snackbar';
import * as React from 'react';

type SnackbarProps = {
  closeSnackbar: () => void;
  message: string;
  openedSnackbar: boolean;
};

/**
 *
 * @param props
 * @constructor
 */
export const Snackbar = (props: SnackbarProps) => {
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
