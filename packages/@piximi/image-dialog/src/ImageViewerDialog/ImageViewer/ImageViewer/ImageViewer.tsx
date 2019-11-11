import * as React from 'react';
import { ImageViewerDrawer } from '../ImageViewerDrawer';
import { ImageCanvas } from '../ImageCanvas';
import { ImageViewerAppBar } from '../ImageViewerAppBar';

type ImageViewerProps = {
  src: string;
  onClose: () => void;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const { src, onClose } = props;

  return (
    <>
      <ImageCanvas src={src} />
      <ImageViewerDrawer src={src} />
      <ImageViewerAppBar onClose={onClose} />
    </>
  );
};
