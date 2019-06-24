import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

import styles from './AlertDialogContent.css';
import { DialogContent, Paper } from '@material-ui/core';

const useStyles = makeStyles(styles);

type AlertDialogContentProps = {
  children: React.ReactNode;
};

/**
 *
 * @param props
 * @constructor
 */
export const AlertDialogContent = (props: AlertDialogContentProps) => {
  const { children } = props;

  const classes = useStyles({});

  return (
    <DialogContent className={classes.content}>
      <Paper className={classes.root} elevation={0}>
        {children}
      </Paper>
    </DialogContent>
  );
};
