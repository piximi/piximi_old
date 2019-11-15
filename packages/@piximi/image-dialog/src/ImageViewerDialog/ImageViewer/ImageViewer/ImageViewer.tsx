import * as React from 'react';
import { useEffect, useState } from 'react';
import { ImageViewerDrawer } from '../ImageViewerDrawer';
import { ImageCanvas } from '../ImageCanvas';
import { ImageViewerAppBar } from '../ImageViewerAppBar';
import { Image } from 'image-js';

type ImageViewerProps = {
  src: string;
  onClose: () => void;
};

export const ImageViewer = (props: ImageViewerProps) => {
  const { src, onClose } = props;

  const [channels, setChannels] = useState({ r: true, g: true, b: true });
  const [intensityRange, setIntensityRange] = useState([0.0, 1.0]);

  const [image, setImage] = useState<Image>(new Image());

  const openImage = async () => {
    const image = await Image.load(src);

    const [minimum, maximum] = intensityRange;

    const rescaled = image.multiply(maximum - minimum);

    setImage(rescaled);

    setImage(rescaled);
  };

  useEffect(() => {
    openImage();
  }, [src, intensityRange]);

  return (
    <>
      <ImageCanvas channels={channels} image={image} />
      <ImageViewerDrawer
        channels={channels}
        image={image}
        setChannels={setChannels}
        setIntensityRange={setIntensityRange}
      />
      <ImageViewerAppBar onClose={onClose} />
    </>
  );
};
