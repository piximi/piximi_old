import * as React from 'react';
import * as MaterialUI from '@material-ui/core';

type Props = {
  closeSnackbar: () => void;
  message: string;
  openedSnackbar: boolean;
};

const Snackbar = (props: Props) => {
  const { closeSnackbar, message, openedSnackbar } = props;

  return (
    <MaterialUI.Snackbar
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      open={openedSnackbar}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      message={<span id="message-id">{message}</span>}
      action={[]}
    />
  );
};

export default Snackbar;
