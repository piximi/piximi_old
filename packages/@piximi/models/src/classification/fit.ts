import {FitOptions} from "@piximi/types";
import {History, LayersModel, Tensor} from "@tensorflow/tfjs";
import {Dataset} from "@tensorflow/tfjs-data";

export const fit = async (
  compiled: LayersModel,
  data: Dataset<{xs: Tensor; ys: Tensor}>,
  validationData: Dataset<{xs: Tensor; ys: Tensor}>,
  options: FitOptions,
  callback?: any
): Promise<{fitted: LayersModel; status: History}> => {
  const args = {
    callbacks: {
      onBatchEnd: callback
    },
    epochs: 10,
    validationData: validationData.batch(32)
  };

  const status = await compiled.fitDataset(data.batch(32), args);

  return {fitted: compiled, status: status};
};
