import * as React from 'react';
import { styles } from './ImageDialog.css';
import { Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ConnectedImageDialogContent } from '../ImageDialogContent/ImageDialogContent';

const useStyles = makeStyles(styles);

type ImageDialogProps = {
  onClose: () => void;
  open: boolean;
  src: string;
  imgIdentifier: string;
};

export const ImageDialog = (props: ImageDialogProps) => {
  const classes = useStyles({});

  const { onClose, open, src, imgIdentifier } = props;

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <ConnectedImageDialogContent
        imgIdentifier={imgIdentifier}
        src={src}
        onClose={onClose}
      />
    </Dialog>
  );
};
