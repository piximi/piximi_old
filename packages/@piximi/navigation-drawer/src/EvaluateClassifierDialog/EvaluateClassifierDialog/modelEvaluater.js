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
exports.evaluateTensorflowModel = function(
  model,
  evaluationData,
  labels,
  numberOfClasses
) {
  return returnResult(model, evaluationData, labels, numberOfClasses);
};
exports.evaluateTensorflowModelCV = function(
  model,
  evaluationData,
  labels,
  numberOfClasses
) {
  return __awaiter(void 0, void 0, void 0, function() {
    var dataSize,
      k,
      dataFolds,
      labelFolds,
      accuracy,
      crossEntropy,
      confusionMatrixArray,
      i,
      validationData,
      trainData,
      validationLabels,
      trainLabels,
      j,
      concatenatedTensorData,
      concatenatedLabelData,
      evaluationResult,
      c,
      c;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          dataSize = evaluationData.length;
          k = Math.min(10, Math.ceil(Math.sqrt(dataSize)));
          dataFolds = Array.from(
            Array(Math.ceil(evaluationData.length / k)),
            function(_, i) {
              return evaluationData.slice(i * k, i * k + k);
            }
          );
          labelFolds = Array.from(Array(Math.ceil(labels.length / k)), function(
            _,
            i
          ) {
            return labels.slice(i * k, i * k + k);
          });
          model.compile({
            loss: "categoricalCrossentropy",
            metrics: ["accuracy"],
            optimizer: tensorflow.train.adam()
          });
          accuracy = 0;
          crossEntropy = 0;
          confusionMatrixArray = new Int32Array(
            numberOfClasses * numberOfClasses
          );
          i = 0;
          _a.label = 1;
        case 1:
          if (!(i < k)) return [3 /*break*/, 4];
          validationData = dataFolds[i];
          trainData = [];
          validationLabels = labelFolds[i];
          trainLabels = [];
          for (j = 0; j < k; j++) {
            if (j !== i) {
              trainData = trainData.concat(dataFolds[j]);
              trainLabels = trainLabels.concat(labelFolds[j]);
            }
          }
          concatenatedTensorData = tensorflow.tidy(function() {
            return tensorflow.concat(trainData);
          });
          concatenatedLabelData = tensorflow.tidy(function() {
            return tensorflow.oneHot(trainLabels, numberOfClasses);
          });
          return [
            4 /*yield*/,
            model.fit(concatenatedTensorData, concatenatedLabelData)
          ];
        case 2:
          _a.sent();
          evaluationResult = returnResult(
            model,
            validationData,
            validationLabels,
            numberOfClasses
          );
          crossEntropy += evaluationResult.crossEntropy;
          accuracy += evaluationResult.accuracy;
          for (c = 0; c < confusionMatrixArray.length; c++) {
            confusionMatrixArray[c] += evaluationResult.confusionMatrixArray[c];
          }
          _a.label = 3;
        case 3:
          i++;
          return [3 /*break*/, 1];
        case 4:
          for (c = 0; c < confusionMatrixArray.length; c++) {
            confusionMatrixArray[c] = confusionMatrixArray[c] / k;
          }
          return [
            2 /*return*/,
            {
              accuracy: accuracy / k,
              crossEntropy: crossEntropy / k,
              confusionMatrixArray: confusionMatrixArray
            }
          ];
      }
    });
  });
};
var returnResult = function(model, evaluationData, labels, numberOfClasses) {
  var predictions = [];
  for (var i = 0; i < evaluationData.length; i++) {
    var prediction = model.predict(evaluationData[i]);
    predictions.push(prediction);
  }
  var accuracy;
  var crossEntropy;
  if (numberOfClasses === 2) {
    accuracy = tensorflow.metrics
      .binaryAccuracy(tensorflow.tensor(labels), predictions)
      .dataSync()[0];
    crossEntropy = tensorflow.metrics
      .binaryCrossentropy(tensorflow.tensor(labels), predictions)
      .dataSync()[0];
  } else {
    var concatenatedLabelData = tensorflow.tidy(function() {
      return tensorflow.oneHot(labels, numberOfClasses);
    });
    accuracy = tensorflow.metrics
      .categoricalAccuracy(concatenatedLabelData, predictions)
      .dataSync()[0];
    crossEntropy = tensorflow.metrics
      .categoricalCrossentropy(tensorflow.tensor(labels), predictions)
      .dataSync()[0];
  }
  var confusionMatrixArray = tensorflow.math
    .confusionMatrix(tensorflow.tensor(labels), predictions, numberOfClasses)
    .dataSync();
  return {
    accuracy: accuracy,
    crossEntropy: crossEntropy,
    confusionMatrixArray: confusionMatrixArray
  };
};
