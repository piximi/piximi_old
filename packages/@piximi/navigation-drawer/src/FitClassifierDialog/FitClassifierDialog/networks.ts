import * as tensorflow from '@tensorflow/tfjs';

export const createModel = async (numberOfClasses: number) => {
  const model = tensorflow.sequential();
  model.add(
    tensorflow.layers.conv2d({
      inputShape: [224, 224, 3],
      kernelSize: 3,
      filters: 16,
      activation: 'relu',
      kernelInitializer: 'ones'
    })
  );
  model.add(tensorflow.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
  model.add(
    tensorflow.layers.conv2d({
      kernelSize: 3,
      filters: 32,
      activation: 'relu',
      kernelInitializer: 'ones'
    })
  );
  model.add(tensorflow.layers.maxPooling2d({ poolSize: 2, strides: 2 }));
  model.add(
    tensorflow.layers.conv2d({
      kernelSize: 3,
      filters: 32,
      activation: 'relu',
      kernelInitializer: 'ones'
    })
  );
  model.add(tensorflow.layers.flatten());
  model.add(
    tensorflow.layers.dense({
      units: 32,
      activation: 'relu',
      kernelInitializer: 'ones'
    })
  );
  model.add(
    tensorflow.layers.dense({
      units: numberOfClasses,
      activation: 'relu',
      kernelInitializer: 'ones'
    })
  );
  model.add(
    tensorflow.layers.dense({ units: numberOfClasses, activation: 'softmax' })
  );
  return model;
};

export const createMobileNet = async (numberOfClasses: number) => {
  const resource =
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

  const mobilenet = await tensorflow.loadLayersModel(resource);

  const layer = mobilenet.getLayer('conv_pw_13_relu');

  const backbone = tensorflow.model({
    inputs: mobilenet.inputs,
    outputs: layer.output
  });

  const a = tensorflow.layers.globalAveragePooling2d({
    inputShape: backbone.outputs[0].shape.slice(1)
  });

  const b = tensorflow.layers.reshape({
    targetShape: [1, 1, backbone.outputs[0].shape[3]]
  });

  const c = tensorflow.layers.dropout({
    rate: 0.001
  });

  const d = tensorflow.layers.conv2d({
    filters: numberOfClasses,
    kernelSize: [1, 1]
  });

  const e = tensorflow.layers.reshape({
    targetShape: [numberOfClasses]
  });

  const f = tensorflow.layers.activation({
    activation: 'softmax'
  });

  const config = {
    layers: [...backbone.layers, a, b, c, d, e, f]
  };

  const model = tensorflow.sequential(config);
  return model;
};
