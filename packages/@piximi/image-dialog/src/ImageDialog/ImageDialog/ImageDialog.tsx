import * as React from 'react';
import { styles } from './ImageDialog.css';
import { Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ConnectedImageDialogContent } from '../ImageDialogContent/ImageDialogContent';
import { Image } from '@piximi/types';
import { ImageDialogAppBar } from '../ImageDialogAppBar';
import { NavigationDrawer } from '../ImageDialogContent/NavigationDrawer/NavigationDrawer';

const useStyles = makeStyles(styles);

type ImageDialogProps = {
  image: Image;
  onClose: () => void;
  open: boolean;
};

export const ImageDialog = (props: ImageDialogProps) => {
  const classes = useStyles({});

  const { image, onClose, open } = props;

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <ImageDialogAppBar onClose={onClose} />

      <ConnectedImageDialogContent image={image} />

      <NavigationDrawer image={image} />
    </Dialog>
  );
};
