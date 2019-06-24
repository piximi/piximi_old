import * as React from 'react';
import axios from 'axios';
import { styles } from './OpenExampleClassifierDialog.css';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
// @ts-ignore
import { OpenExampleClassifierListItem } from '../NavigationDrawer';
import { Category, Image } from '@piximi/types';

const useStyles = makeStyles(styles);

type OpenExampleClassifierDialogProps = {
  openClassifier: (
    categories: Category[],
    images: Image[],
    name: string
  ) => void;
  open: boolean;
  onClose: () => void;
  closeMenu: () => void;
};

export const OpenExampleClassifierDialog = (
  props: OpenExampleClassifierDialogProps
) => {
  const classes = useStyles({});

  const { t: translation } = useTranslation();

  const { openClassifier, open, onClose, closeMenu } = props;

  const openExampleClassifier = (name: string) => {
    closeMenu();
    return axios
      .get(
        'https://raw.githubusercontent.com/piximi/application/master/src/demos/' +
          name +
          '.piximi'
      )
      .then(result => {
        openClassifier(result.data.categories, result.data.images, name);
      })
      .catch(function(error) {
        alert(error);
      });
  };

  const closeMenueAndDialog = () => {
    onClose();
    closeMenu();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open}>
      <DialogTitle disableTypography className={classes.dialogTitle}>
        <Typography variant="h6">
          {translation('Open example classifier')}
        </Typography>

        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={closeMenueAndDialog}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent classes={{ root: classes.dialogContent }}>
        <List>
          <OpenExampleClassifierListItem
            src="worms.png"
            primary="worms"
            secondary="worms"
            onClick={() => {
              onClose();
              openExampleClassifier('worms');
            }}
          />
        </List>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
};
