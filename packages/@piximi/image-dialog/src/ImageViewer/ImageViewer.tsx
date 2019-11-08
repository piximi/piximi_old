import * as React from 'react';
import { ImageViewerAppBar, ImageViewerExposureDrawer } from '..';
import { ImageCanvas } from '..';

type ImageViewerProps = {
  src: string;
  onClose: () => void;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const { src, onClose } = props;

  return (
    <>
      <ImageCanvas src={src} />
      <ImageViewerExposureDrawer src={src} />
      <ImageViewerAppBar onClose={onClose} />
    </>
  );
};
