import * as React from 'react';
import { XYPlot, AreaSeries } from 'react-vis';
import { useEffect, useState } from 'react';
import { Image } from 'image-js';

type ImageHistogramProps = {
  bins: number;
  channels: number[];
  image: Image;
  src: string;
};

export const ImageHistogram = (props: ImageHistogramProps) => {
  const { bins, channels, image, src } = props;

  const [r, setR] = useState([]);
  const [g, setG] = useState([]);
  const [b, setB] = useState([]);

  const transform = (xs: number[]): { x: number; y: number }[] => {
    return xs.map((element, index) => {
      return { x: index, y: element };
    });
  };

  const effect = () => {
    if (channels.includes(0)) {
      const r: { x: number; y: number }[] = transform(
        image.getHistograms({ maxSlots: bins })[0]
      );

      setR(r);
    }

    if (channels.includes(1)) {
      const g: { x: number; y: number }[] = transform(
        image.getHistograms({ maxSlots: bins })[1]
      );

      setG(g);
    }

    if (channels.includes(2)) {
      const b: { x: number; y: number }[] = transform(
        image.getHistograms({ maxSlots: bins })[2]
      );

      setB(b);
    }
  };

  useEffect(effect, [image]);

  return (
    <XYPlot height={300} width={300}>
      <AreaSeries color="#e53935" data={r} opacity={0.5} />
      <AreaSeries color="#43a047" data={g} opacity={0.5} />
      <AreaSeries color="#1e88e5" data={b} opacity={0.5} />
    </XYPlot>
  );
};
