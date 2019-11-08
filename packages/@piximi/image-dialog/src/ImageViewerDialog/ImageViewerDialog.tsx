import * as React from 'react';
import styles from './ImageViewerDialog.css';
import Dialog from '@material-ui/core/Dialog';
import { ConnectedImageViewer } from '..';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type ImageViewerDialogProps = {
  onClose: () => void;
  open: boolean;
  src: string;
  imgIdentifier: string;
};

export const ImageViewerDialog = (props: ImageViewerDialogProps) => {
  const classes = useStyles({});

  const { onClose, open, src, imgIdentifier } = props;

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <ConnectedImageViewer
        imgIdentifier={imgIdentifier}
        src={src}
        onClose={onClose}
      />
    </Dialog>
  );
};
