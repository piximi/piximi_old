import * as MaterialUI from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

import styles from './DialogTitle.css';

const useStyles = makeStyles(styles);

type Props = {
  title: string;
};

/**
 *
 * @param props
 * @constructor
 */
const DialogTitle = (props: Props) => {
  const { title } = props;

  const classes = useStyles({});

  const { t: translation } = useTranslation();

  return (
    <MaterialUI.DialogTitle disableTypography>
      <MaterialUI.Typography classes={{ root: classes.root }} variant="h6">
        {translation(title)}
      </MaterialUI.Typography>
    </MaterialUI.DialogTitle>
  );
};

export default DialogTitle;
