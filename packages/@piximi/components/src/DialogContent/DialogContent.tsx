import * as MaterialUI from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

import styles from './DialogContent.css';

const useStyles = makeStyles(styles);

type Props = {
  children: React.ReactNode;
};

/**
 *
 * @param props
 * @constructor
 */
export const DialogContent = (props: Props) => {
  const { children } = props;

  const classes = useStyles({});

  return (
    <MaterialUI.DialogContent className={classes.content}>
      <MaterialUI.Paper className={classes.root} elevation={0}>
        {children}
      </MaterialUI.Paper>
    </MaterialUI.DialogContent>
  );
};
