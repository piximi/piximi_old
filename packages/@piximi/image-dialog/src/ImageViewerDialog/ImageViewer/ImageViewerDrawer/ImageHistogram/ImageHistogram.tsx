import * as React from 'react';
import { XYPlot, AreaSeries } from 'react-vis';
import { useEffect, useState } from 'react';
import { Image } from 'image-js';

type ImageHistogramProps = {
  bins: number;
  channels: {
    r: boolean;
    g: boolean;
    b: boolean;
  };
  image: Image;
};

export const ImageHistogram = (props: ImageHistogramProps) => {
  const { bins, channels, image } = props;

  const histograms = image.getHistograms({ maxSlots: bins });

  const transform = (xs: number[]): { x: number; y: number }[] => {
    return xs.map((element, index) => {
      return { x: index, y: element };
    });
  };

  return (
    <XYPlot height={300} width={300}>
      {channels.r ? (
        <AreaSeries
          color="#e53935"
          data={transform(histograms[0])}
          opacity={0.5}
        />
      ) : null}
      {channels.g ? (
        <AreaSeries
          color="#43a047"
          data={transform(histograms[1])}
          opacity={0.5}
        />
      ) : null}
      {channels.b ? (
        <AreaSeries
          color="#1e88e5"
          data={transform(histograms[2])}
          opacity={0.5}
        />
      ) : null}
    </XYPlot>
  );
};
