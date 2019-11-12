import * as React from 'react';
import { ImageViewerDrawer } from '../ImageViewerDrawer';
import { ImageCanvas } from '../ImageCanvas';
import { ImageViewerAppBar } from '../ImageViewerAppBar';
import { useState } from 'react';
import { Image } from 'image-js';
import { useEffect } from 'react';

type ImageViewerProps = {
  src: string;
  onClose: () => void;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const { src, onClose } = props;

  const [channels, setChannels] = useState({ r: true, g: true, b: true });

  const [image, setImage] = useState<Image>(new Image());

  const openImage = async () => {
    const image = await Image.load(src);

    setImage(image);
  };

  useEffect(() => {
    openImage();
  }, [src]);

  return (
    <>
      <ImageCanvas channels={channels} image={image} />
      <ImageViewerDrawer
        channels={channels}
        image={image}
        setChannels={setChannels}
      />
      <ImageViewerAppBar onClose={onClose} />
    </>
  );
};
