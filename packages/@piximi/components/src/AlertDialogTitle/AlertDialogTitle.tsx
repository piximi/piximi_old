import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import styles from './AlertDialogTitle.css';
import { DialogTitle, Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);

type AlertDialogTitleProps = {
  title: string;
};

/**
 *
 * @param props
 * @constructor
 */
export const AlertDialogTitle = (props: AlertDialogTitleProps) => {
  const { title } = props;

  const classes = useStyles({});

  const { t: translation } = useTranslation();

  return (
    <DialogTitle disableTypography>
      <Typography classes={{ root: classes.root }} variant="h6">
        {translation(title)}
      </Typography>
    </DialogTitle>
  );
};
