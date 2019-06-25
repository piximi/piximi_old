import * as React from 'react';
import Image from 'image-js';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';

type HistogramProps = {
  image: Image;
};

export const Histogram = (props: HistogramProps) => {
  const { image } = props;

  const data = image.getHistogram({ channel: 0, maxSlots: 32 });

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryBar style={{ data: { fill: '#c43a31' } }} data={data} />
    </VictoryChart>
  );
};
