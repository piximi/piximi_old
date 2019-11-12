import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { BrightnessSlider } from '../BrightnessSlider';
import { ChannelSelection } from '../ChannelSelection';
import { ContrastSlider } from '../ContrastSlider';
import { ImageHistogram } from '../ImageHistogram';

type ImageViewerDrawerProps = {
  src: string;
};

export const ImageViewerDrawer = (props: ImageViewerDrawerProps) => {
  const { src } = props;

  return (
    <Drawer anchor="right" open variant="persistent">
      <ImageHistogram bins={32} src={src} />

      <ChannelSelection />

      <BrightnessSlider />

      <ContrastSlider />
    </Drawer>
  );
};
