import * as tensorflow from '@tensorflow/tfjs';
import { LossOrMetricFn } from '@tensorflow/tfjs-layers/src/types';

export type CompileOptions = {
  losses:
    | LossOrMetricFn
    | Array<LossOrMetricFn>
    | { [outputName: string]: LossOrMetricFn };
  metrics:
    | LossOrMetricFn
    | Array<LossOrMetricFn>
    | { [outputName: string]: LossOrMetricFn };
  optimizer: tensorflow.Optimizer;
};

export type FitOptions = {
  batchSize: number;
  epochs: number;
  initialEpoch: number;
};

export type Model = {
  compileOptions: CompileOptions;
  fitOptions: FitOptions;
  inputs: tensorflow.SymbolicTensor | Array<tensorflow.SymbolicTensor>;
  name: string;
  outputs: tensorflow.SymbolicTensor | Array<tensorflow.SymbolicTensor>;
};
