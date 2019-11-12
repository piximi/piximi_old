import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { BrightnessSlider } from '../BrightnessSlider';
import { ChannelSelection } from '../ChannelSelection';
import { ContrastSlider } from '../ContrastSlider';
import { ImageHistogram } from '../ImageHistogram';
import { useEffect, useState } from 'react';
import { Image } from 'image-js';

type ImageViewerDrawerProps = {
  src: string;
};

export const ImageViewerDrawer = (props: ImageViewerDrawerProps) => {
  const { src } = props;

  const [channels, setChannels] = useState([0, 1, 2]);

  const [image, setImage] = useState<Image>(new Image());

  const openImage = async () => {
    const image = await Image.load(src);

    setImage(image);
  };

  useEffect(() => {
    openImage();
  }, [src]);

  return (
    <Drawer anchor="right" open variant="persistent">
      <ImageHistogram bins={32} channels={channels} image={image} src={src} />

      <ChannelSelection channels={channels} setChannels={setChannels} />

      <BrightnessSlider />

      <ContrastSlider />
    </Drawer>
  );
};
