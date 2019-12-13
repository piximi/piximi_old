"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g;
    return (
      (g = {next: verb(0), throw: verb(1), return: verb(2)}),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {value: op[1], done: false};
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return {value: op[0] ? op[1] : void 0, done: true};
    }
  };
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
exports.__esModule = true;
var tensorflow = __importStar(require("@tensorflow/tfjs"));
/**
 * Creates a convolutional neural network (Convnet) for the MNIST data.
 *
 * @returns {tensorflow.Model} An instance of tensorflow.Model.
 */
exports.createModel = function(numberOfClasses) {
  return __awaiter(void 0, void 0, void 0, function() {
    var model;
    return __generator(this, function(_a) {
      model = tensorflow.sequential();
      // The first layer of the convolutional neural network plays a dual role:
      // it is both the input layer of the neural network and a layer that performs
      // the first convolution operation on the input. It receives the 28x28 pixels
      // black and white images. This input layer uses 16 filters with a kernel size
      // of 5 pixels each. It uses a simple RELU activation function which pretty
      // much just looks like this: __/
      model.add(
        tensorflow.layers.conv2d({
          inputShape: [224, 224, 3],
          kernelSize: 3,
          filters: 16,
          activation: "relu"
        })
      );
      // After the first layer we include a MaxPooling layer. This acts as a sort of
      // downsampling using max values in a region instead of averaging.
      // https://www.quora.com/What-is-max-pooling-in-convolutional-neural-networks
      model.add(tensorflow.layers.maxPooling2d({poolSize: 2, strides: 2}));
      // Our third layer is another convolution, this time with 32 filters.
      model.add(
        tensorflow.layers.conv2d({
          kernelSize: 3,
          filters: 32,
          activation: "relu"
        })
      );
      // Max pooling again.
      model.add(tensorflow.layers.maxPooling2d({poolSize: 2, strides: 2}));
      // Add another conv2d layer.
      model.add(
        tensorflow.layers.conv2d({
          kernelSize: 3,
          filters: 32,
          activation: "relu"
        })
      );
      // Now we flatten the output from the 2D filters into a 1D vector to prepare
      // it for input into our last layer. This is common practice when feeding
      // higher dimensional data to a final classification output layer.
      model.add(tensorflow.layers.flatten({}));
      model.add(tensorflow.layers.dense({units: 64, activation: "relu"}));
      // Our last layer is a dense layer which has 10 output units, one for each
      // output class (i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9). Here the classes actually
      // represent numbers, but it's the same idea if you had classes that
      // represented other entities like dogs and cats (two output classes: 0, 1).
      // We use the softmax function as the activation for the output layer as it
      // creates a probability distribution over our 10 classes so their output
      // values sum to 1.
      model.add(
        tensorflow.layers.dense({units: numberOfClasses, activation: "softmax"})
      );
      return [2 /*return*/, model];
    });
  });
};
exports.createMobileNet = function(numberOfClasses) {
  return __awaiter(void 0, void 0, void 0, function() {
    var resource, mobilenet, layer, backbone, a, b, c, d, e, f, config, model;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          resource =
            "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";
          return [4 /*yield*/, tensorflow.loadLayersModel(resource)];
        case 1:
          mobilenet = _a.sent();
          layer = mobilenet.getLayer("conv_pw_13_relu");
          backbone = tensorflow.model({
            inputs: mobilenet.inputs,
            outputs: layer.output
          });
          a = tensorflow.layers.globalAveragePooling2d({
            inputShape: backbone.outputs[0].shape.slice(1)
          });
          b = tensorflow.layers.reshape({
            targetShape: [1, 1, backbone.outputs[0].shape[3]]
          });
          c = tensorflow.layers.dropout({
            rate: 0.001
          });
          d = tensorflow.layers.conv2d({
            filters: numberOfClasses,
            kernelSize: [1, 1]
          });
          e = tensorflow.layers.reshape({
            targetShape: [numberOfClasses]
          });
          f = tensorflow.layers.activation({
            activation: "softmax"
          });
          config = {
            layers: __spreadArrays(backbone.layers, [a, b, c, d, e, f])
          };
          model = tensorflow.sequential(config);
          return [2 /*return*/, model];
      }
    });
  });
};
