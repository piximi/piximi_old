import * as React from 'react';
import { styles } from './ImageDialog.css';
import { Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ConnectedImageDialogContent } from '../ImageDialogContent/ImageDialogContent';
import { Image } from '@piximi/types';

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
      <ConnectedImageDialogContent image={image} onClose={onClose} />
    </Dialog>
  );
};
