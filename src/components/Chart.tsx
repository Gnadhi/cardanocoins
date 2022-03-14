import * as React from 'react';
import { scaleTime } from 'd3-scale';

import { ChartCanvas, Chart } from 'react-financial-charts';
import { AreaSeries } from 'react-financial-charts';
import { XAxis, YAxis } from 'react-financial-charts';

interface CustomChartProps {
  data: object[];
  width: number;
  ratio: number;
}

export default function CustomChart({ data, width, ratio }: CustomChartProps) {
  return (
    <ChartCanvas
      ratio={ratio}
      width={width}
      height={400}
      margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
      seriesName="MSFT"
      data={data}
      xAccessor={(d) => d.date}
      xScale={scaleTime()}
      xExtents={[new Date(2011, 0, 1), new Date(2013, 0, 2)]}
    >
      <Chart id={0} yExtents={(d) => d.close}>
        <defs>
          <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
            <stop offset="0%" stopColor="#b5d0ff" stopOpacity={0.2} />
            <stop offset="70%" stopColor="#6fa4fc" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#4286f4" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <XAxis axisAt="bottom" orient="bottom" ticks={6} />
        <YAxis axisAt="left" orient="left" />
        <AreaSeries yAccessor={(d) => d.close} strokeWidth={2} />
      </Chart>
    </ChartCanvas>
  );
}
