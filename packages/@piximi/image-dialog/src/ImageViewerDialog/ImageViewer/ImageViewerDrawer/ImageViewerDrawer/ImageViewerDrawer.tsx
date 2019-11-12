import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { BrightnessSlider } from '../BrightnessSlider';
import { ChannelSelection } from '../ChannelSelection';
import { ContrastSlider } from '../ContrastSlider';
import { ImageHistogram } from '../ImageHistogram';
import { Image } from 'image-js';

type ImageViewerDrawerProps = {
  channels: { r: boolean; g: boolean; b: boolean };
  image: Image;
  setChannels: (channels: { r: boolean; g: boolean; b: boolean }) => void;
};

export const ImageViewerDrawer = (props: ImageViewerDrawerProps) => {
  const { channels, image, setChannels } = props;

  return (
    <Drawer anchor="right" open variant="persistent">
      <ImageHistogram bins={32} channels={channels} image={image} />

      <ChannelSelection channels={channels} setChannels={setChannels} />

      <BrightnessSlider />

      <ContrastSlider />
    </Drawer>
  );
};
