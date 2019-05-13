import * as MaterialUI from '@material-ui/core';
import { SnackbarOrigin } from '@material-ui/core/Snackbar';
import * as React from 'react';

type Props = {
  closeSnackbar: () => void;
  message: string;
  openedSnackbar: boolean;
};

/**
 *
 * @param props
 * @constructor
 */
const Snackbar = (props: Props) => {
  const { closeSnackbar, message, openedSnackbar } = props;

  const anchorOrigin: SnackbarOrigin = {
    horizontal: 'left',
    vertical: 'bottom'
  };

  return (
    <MaterialUI.Snackbar
      action={[]}
      anchorOrigin={anchorOrigin}
      autoHideDuration={6000}
      message={<span id="message-id">{message}</span>}
      onClose={closeSnackbar}
      open={openedSnackbar}
    />
  );
};

export default Snackbar;
