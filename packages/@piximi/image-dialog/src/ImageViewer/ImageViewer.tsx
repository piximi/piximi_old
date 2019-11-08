import * as React from 'react';
import styles from './ImageViewer.css';
import { ImageViewerAppBar, ImageViewerExposureDrawer } from '..';
import { ImageCanvas } from '..';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type ImageViewerProps = {
  src: string;
  onClose: () => void;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const classes = useStyles({});

  const { src, onClose } = props;

  return (
    <>
      <ImageCanvas src={src} />

      <ImageViewerAppBar onClose={onClose} />

      <ImageViewerExposureDrawer src={src} />
    </>
  );
};
