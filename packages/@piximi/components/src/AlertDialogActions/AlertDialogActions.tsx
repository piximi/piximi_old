import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import styles from './AlertDialogActions.css';
import { Button, DialogActions } from '@material-ui/core';

const useStyles = makeStyles(styles);

type AlertDialogProps = {
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
export const AlertDialogActions = (props: AlertDialogProps) => {
  const {
    acceptanceTitle,
    cancellationTitle,
    onAcceptance,
    onCancellation
  } = props;

  const classes = useStyles({});

  const { t: translation } = useTranslation();

  return (
    <DialogActions>
      <Button classes={{ root: classes.button }} onClick={onCancellation}>
        {translation(cancellationTitle)}
      </Button>

      <Button classes={{ root: classes.button }} onClick={onAcceptance}>
        {translation(acceptanceTitle)}
      </Button>
    </DialogActions>
  );
};
