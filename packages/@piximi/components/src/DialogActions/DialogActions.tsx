import * as MaterialUI from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

import styles from './DialogActions.css';

const useStyles = makeStyles(styles);

type Props = {
  acceptanceTitle: string;
  cancellationTitle: string;
  onAcceptance: () => void;
  onCancellation: () => void;
};

/**
 *
 * @param props
 * @constructor
 */
const DialogActions = (props: Props) => {
  const {
    acceptanceTitle,
    cancellationTitle,
    onAcceptance,
    onCancellation
  } = props;

  const classes = useStyles();

  const { t: translation } = useTranslation();

  return (
    <MaterialUI.DialogActions>
      <MaterialUI.Button
        classes={{ root: classes.button }}
        onClick={onCancellation}
      >
        {translation(cancellationTitle)}
      </MaterialUI.Button>

      <MaterialUI.Button
        classes={{ root: classes.button }}
        onClick={onAcceptance}
      >
        {translation(acceptanceTitle)}
      </MaterialUI.Button>
    </MaterialUI.DialogActions>
  );
};

export default DialogActions;
