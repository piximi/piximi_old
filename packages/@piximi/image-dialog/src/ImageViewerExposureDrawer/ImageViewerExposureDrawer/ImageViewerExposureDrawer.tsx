import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { BrightnessSlider } from '../BrightnessSlider';
import { ChannelSelection } from '../ChannelSelection';
import { ContrastSlider } from '../ContrastSlider';
import { ImageHistogram } from '../ImageHistogram';

type ImageViewerExposureDrawerProps = {
  src: string;
};

export const ImageViewerExposureDrawer = (
  props: ImageViewerExposureDrawerProps
) => {
  const { src } = props;

  return (
    <Drawer anchor="right" open variant="persistent">
      <ImageHistogram channels={[]} src={src} />

      <ChannelSelection />

      <BrightnessSlider />

      <ContrastSlider />
    </Drawer>
  );
};
