import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { PopoverOrigin } from "@material-ui/core/Popover";

type Props = {
  closeSnackbar: () => void;
  message: string;
  openedSnackbar: boolean;
};

const Snackbar = (props: Props) => {
  const { closeSnackbar, message, openedSnackbar } = props;

  const anchorOrigin: PopoverOrigin = {
    horizontal: 'left',
    vertical: 'bottom'
  };

  return (
    <MaterialUI.Snackbar
      anchorOrigin={anchorOrigin}
      open={openedSnackbar}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      message={<span id="message-id">{message}</span>}
      action={[]}
    />
  );
};

export default Snackbar;
