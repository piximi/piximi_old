import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import styles from './AlertDialog.css';
import { Dialog } from '@material-ui/core';

const useStyles = makeStyles(styles);

type AlertDialogProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

/**
 *
 * @param props
 * @constructor
 */
export const AlertDialog = (props: AlertDialogProps) => {
  const { children, open, onClose } = props;

  const classes = useStyles({});

  return (
    <Dialog
      classes={{ paper: classes.paper }}
      fullWidth
      maxWidth="xs"
      onClose={onClose}
      open={open}
    >
      {children}
    </Dialog>
  );
};
