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
var ImageJS = __importStar(require("image-js"));
var tensorflow = __importStar(require("@tensorflow/tfjs"));
exports.createTrainingSet = function(categories, labledData, numberOfClasses) {
  return __awaiter(void 0, void 0, void 0, function() {
    var trainingData,
      i,
      trainDataSet,
      concatenatedTensorData,
      concatenatedLabelData;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          trainingData = [];
          for (i = 0; i < labledData.length; i++) {
            if (labledData[i].partition === 0) {
              trainingData.push(labledData[i]);
            }
          }
          return [
            4 /*yield*/,
            createLabledTensorflowDataSet(trainingData, categories)
          ];
        case 1:
          trainDataSet = _a.sent();
          concatenatedTensorData = tensorflow.tidy(function() {
            return tensorflow.concat(trainDataSet.data);
          });
          concatenatedLabelData = tensorflow.tidy(function() {
            return tensorflow.oneHot(trainDataSet.labels, numberOfClasses);
          });
          trainDataSet.data.forEach(function(tensor) {
            return tensor.dispose();
          });
          return [
            2 /*return*/,
            {data: concatenatedTensorData, labels: concatenatedLabelData}
          ];
      }
    });
  });
};
exports.createAutotunerDataSet = function(categories, labelData) {
  return __awaiter(void 0, void 0, void 0, function() {
    var trainingData, i, trainDataSet, datapoints, i;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          trainingData = [];
          for (i = 0; i < labelData.length; i++) {
            if (labelData[i].partition === 0) {
              trainingData.push(labelData[i]);
            }
          }
          return [
            4 /*yield*/,
            createLabledTensorflowDataSet(trainingData, categories)
          ];
        case 1:
          trainDataSet = _a.sent();
          datapoints = [];
          for (i = 0; i < trainDataSet.labels.length; i++) {
            datapoints.push({
              data: trainDataSet.data[i],
              labels: trainDataSet.labels[i]
            });
          }
          return [2 /*return*/, datapoints];
      }
    });
  });
};
exports.createTestSet = function(categories, images) {
  return __awaiter(void 0, void 0, void 0, function() {
    var labeledData, testData, i, testDataSet;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          labeledData = images.filter(function(image) {
            return (
              image.categoryIdentifier !==
              "00000000-0000-0000-0000-000000000000"
            );
          });
          testData = [];
          for (i = 0; i < labeledData.length; i++) {
            if (labeledData[i].partition === 2) {
              testData.push(labeledData[i]);
            }
          }
          return [
            4 /*yield*/,
            createLabledTensorflowDataSet(testData, categories)
          ];
        case 1:
          testDataSet = _a.sent();
          return [
            2 /*return*/,
            {data: testDataSet.data, labels: testDataSet.labels}
          ];
      }
    });
  });
};
exports.createPredictionSet = function(images) {
  return __awaiter(void 0, void 0, void 0, function() {
    var predictionImageSet,
      predictionTensorSet,
      imageIdentifiers,
      _i,
      predictionImageSet_1,
      image,
      _a,
      _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          predictionImageSet = images.filter(function(image) {
            return (
              image.categoryIdentifier ===
              "00000000-0000-0000-0000-000000000000"
            );
          });
          predictionTensorSet = [];
          imageIdentifiers = [];
          (_i = 0), (predictionImageSet_1 = predictionImageSet);
          _c.label = 1;
        case 1:
          if (!(_i < predictionImageSet_1.length)) return [3 /*break*/, 4];
          image = predictionImageSet_1[_i];
          _b = (_a = predictionTensorSet).push;
          return [4 /*yield*/, exports.tensorImageData(image)];
        case 2:
          _b.apply(_a, [_c.sent()]);
          imageIdentifiers.push(image.identifier);
          _c.label = 3;
        case 3:
          _i++;
          return [3 /*break*/, 1];
        case 4:
          return [
            2 /*return*/,
            {data: predictionTensorSet, identifiers: imageIdentifiers}
          ];
      }
    });
  });
};
var TESTSET_RATIO = 0.2;
exports.assignToSet = function() {
  var rdn = Math.random();
  if (rdn < TESTSET_RATIO) {
    return 2;
  } else {
    return 0;
  }
};
exports.setTestsetRatio = function(testsetRatio) {
  TESTSET_RATIO = testsetRatio;
};
var createLabledTensorflowDataSet = function(labledData, categories) {
  return __awaiter(void 0, void 0, void 0, function() {
    var tensorData, tensorLabels, _i, labledData_1, image, _a, _b;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          tensorData = [];
          tensorLabels = [];
          (_i = 0), (labledData_1 = labledData);
          _c.label = 1;
        case 1:
          if (!(_i < labledData_1.length)) return [3 /*break*/, 4];
          image = labledData_1[_i];
          _b = (_a = tensorData).push;
          return [4 /*yield*/, exports.tensorImageData(image)];
        case 2:
          _b.apply(_a, [_c.sent()]);
          tensorLabels.push(
            findCategoryIndex(categories, image.categoryIdentifier)
          );
          _c.label = 3;
        case 3:
          _i++;
          return [3 /*break*/, 1];
        case 4:
          return [2 /*return*/, {data: tensorData, labels: tensorLabels}];
      }
    });
  });
};
var imageToSquare = function(image, size) {
  var dimensions =
    image instanceof HTMLImageElement
      ? {width: image.naturalWidth, height: image.naturalHeight}
      : image;
  var scale = size / Math.max(dimensions.height, dimensions.width);
  var width = scale * dimensions.width;
  var height = scale * dimensions.height;
  var canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  var context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, width, height);
  return canvas;
};
var findCategoryIndex = function(categories, identifier) {
  var labels = categories.filter(function(category) {
    return category.identifier !== "00000000-0000-0000-0000-000000000000";
  });
  return labels.findIndex(function(category) {
    return category.identifier === identifier;
  });
};
exports.tensorImageData = function(image) {
  return __awaiter(void 0, void 0, void 0, function() {
    var data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, ImageJS.Image.load(image.data)];
        case 1:
          data = _a.sent();
          return [
            2 /*return*/,
            tensorflow.tidy(function() {
              return tensorflow.browser
                .fromPixels(imageToSquare(data.getCanvas(), 224))
                .toFloat()
                .sub(tensorflow.scalar(127.5))
                .div(tensorflow.scalar(127.5))
                .reshape([1, 224, 224, 3]);
            })
          ];
      }
    });
  });
};
