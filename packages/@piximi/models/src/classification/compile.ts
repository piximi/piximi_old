import {CompileOptions, Optimizer} from "@piximi/types";
import * as tensorflow from "@tensorflow/tfjs";

export const compile = (
  opened: tensorflow.LayersModel,
  options: CompileOptions
) => {
  const compiled = opened;

  const optimizer = () => {
    switch (options.optimizationFunction) {
      case Optimizer.SGD: {
        return tensorflow.train.sgd(options.learningRate);
      }
      case Optimizer.RMSProp: {
        return tensorflow.train.rmsprop(options.learningRate);
      }
      case Optimizer.Adamax: {
        return tensorflow.train.adamax(options.learningRate);
      }
      case Optimizer.Adam: {
        return tensorflow.train.adam(options.learningRate);
      }
      case Optimizer.Adagrad: {
        return tensorflow.train.adagrad(options.learningRate);
      }
      case Optimizer.Adadelta: {
        return tensorflow.train.adadelta(options.learningRate);
      }
    }
  };

  const args = {
    optimizer: optimizer(),
    metrics: options.metrics,
    loss: options.lossFunction
  };

  compiled.compile(args);

  return compiled;
};
