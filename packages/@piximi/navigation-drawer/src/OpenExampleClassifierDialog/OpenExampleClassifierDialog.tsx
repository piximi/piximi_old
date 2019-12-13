import * as React from "react";
import axios from "axios";
import {styles} from "./OpenExampleClassifierDialog.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  Typography
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {makeStyles} from "@material-ui/styles";
import {useTranslation} from "react-i18next";
// @ts-ignore

var test;

import {OpenExampleClassifierListItem} from "../NavigationDrawer";
import {Category, Image} from "@piximi/types";

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

  const {t: translation} = useTranslation();

  const {openClassifier, open, onClose, closeMenu} = props;

  const openExampleClassifier = (name: string) => {
    closeMenu();
    return axios
      .get("https://storage.piximi.app/examples/" + name + ".piximi")
      .then((result: any) => {
        openClassifier(result.data.categories, result.data.images, name);
      })
      .catch(function(error: Error) {
        alert(error);
      });
  };

  const closeMenueAndDialog = () => {
    onClose();
    closeMenu();
  };

  return (
    // @ts-ignore
    <Dialog fullWidth maxWidth="sm" open={open}>
      // @ts-ignore
      <DialogTitle disableTypography className={classes.dialogTitle}>
        // @ts-ignore
        <Typography variant="h6">
          {translation("Open example classifier")}
        </Typography>
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={closeMenueAndDialog}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      // @ts-ignore
      <DialogContent classes={{root: classes.dialogContent}}>
        <List>
          <OpenExampleClassifierListItem
            src="https://storage.piximi.app/examples/MNIST.png"
            primary="MNIST"
            secondary=""
            onClick={() => {
              onClose();
              openExampleClassifier("mnist");
            }}
          />
        </List>
      </DialogContent>
      // @ts-ignore
      <DialogActions />
    </Dialog>
  );
};
