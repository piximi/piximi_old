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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var ImageJS = __importStar(require("image-js"));
var ExpandLess_1 = __importDefault(require("@material-ui/icons/ExpandLess"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Slider_1 = __importDefault(require("@material-ui/core/Slider"));
var React = __importStar(require("react"));
var DialogAppBar_1 = require("../DialogAppBar");
var DialogTransition_1 = require("../DialogTransition");
var Form_1 = require("../Form/Form");
var RescalingForm_1 = require("../RescalingForm/RescalingForm");
var classnames_1 = __importDefault(require("classnames"));
var styles_1 = require("@material-ui/styles");
var tensorflow = __importStar(require("@tensorflow/tfjs"));
var react_1 = require("react");
var FitClassifierDialog_css_1 = require("./FitClassifierDialog.css");
var hooks_1 = require("@piximi/hooks");
var dataset_1 = require("./dataset");
var preprocessing_1 = require("./preprocessing");
// additional stuff to test
var tf = __importStar(require("@tensorflow/tfjs"));
var seedrandom_1 = __importDefault(require("seedrandom"));
var tm = __importStar(require("@teachablemachine/image"));
var tfvis = __importStar(require("@tensorflow/tfjs-vis"));
var SEED_WORD = "testSuite";
var seed = seedrandom_1["default"](SEED_WORD);
var vis = tfvis.visor();
vis.close();
var surface = {name: "show.fitCallbacks", tab: "Training"};
// @ts-ignore
var Table = require("cli-table");
var BEAN_DATASET_URL =
  "https://storage.googleapis.com/teachable-machine-models/test_data/image/beans/";
var FLOWER_DATASET_URL =
  "https://storage.googleapis.com/teachable-machine-models/test_data/image/flowers_all/";
function loadPngImage(c, i, dataset_url) {
  // tslint:disable-next-line:max-line-length
  var src = dataset_url + (c + "/" + i + ".png");
  // console.log(src)
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      return resolve(img);
    };
    img.onerror = reject;
    img.crossOrigin = "anonymous";
    img.src = src;
  });
}
function loadPiximiImage(image) {
  if (image.data.endsWith(".png")) {
    Promise.resolve(loadPiximiPngImage(image.data));
  }
  return getPiximiImage(image);
}
function getPiximiImage(image) {
  var img = new Image(224, 224);
  img.crossOrigin = "anonymous";
  img.src = image.data;
  return img;
}
function loadPiximiPngImage(dataset_url) {
  // tslint:disable-next-line:max-line-length
  var src = dataset_url;
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      return resolve(img);
    };
    img.onerror = reject;
    img.crossOrigin = "anonymous";
    img.src = src;
  });
}
/**
 * Load a flower image from our storage bucket
 */
function loadJpgImage(c, i, dataset_url) {
  // tslint:disable-next-line:max-line-length
  var src = dataset_url + (c + "/" + i + ".jpg");
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      return resolve(img);
    };
    img.onerror = reject;
    img.crossOrigin = "anonymous";
    img.src = src;
  });
}
/**
 * Create train/validation dataset and test dataset with unique images
 */
function createDatasetsFromPiximiImages(images, classes) {
  return __awaiter(this, void 0, void 0, function() {
    var listNumbers,
      numberOfImages,
      i,
      trainAndValidationIndeces,
      testIndices,
      trainAndValidationImages,
      testImages,
      j,
      load,
      i,
      imageIndex,
      _a,
      _b,
      i,
      imageIndex,
      _c,
      _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          listNumbers = [];
          numberOfImages = images.length;
          for (i = 0; i < numberOfImages; ++i) listNumbers[i] = i;
          listNumbers = fisherYates(listNumbers, seed); // shuffle
          trainAndValidationIndeces = listNumbers.slice(
            0,
            numberOfImages * 0.8
          );
          testIndices = listNumbers.slice(
            numberOfImages * 0.8 + 1,
            numberOfImages - 1
          );
          trainAndValidationImages = [];
          testImages = [];
          j = 0;
          _e.label = 1;
        case 1:
          if (!(j < classes.length)) return [3 /*break*/, 11];
          load = [];
          i = 0;
          _e.label = 2;
        case 2:
          if (!(i < trainAndValidationIndeces.length)) return [3 /*break*/, 5];
          imageIndex = trainAndValidationIndeces[i];
          if (
            !(images[imageIndex].categoryIdentifier === classes[j].identifier)
          )
            return [3 /*break*/, 4];
          _b = (_a = load).push;
          return [4 /*yield*/, loadPiximiImage(images[imageIndex])];
        case 3:
          _b.apply(_a, [_e.sent()]);
          _e.label = 4;
        case 4:
          ++i;
          return [3 /*break*/, 2];
        case 5:
          trainAndValidationImages.push(load);
          load = [];
          i = 0;
          _e.label = 6;
        case 6:
          if (!(i < testIndices.length)) return [3 /*break*/, 9];
          imageIndex = testIndices[i];
          if (
            !(images[imageIndex].categoryIdentifier === classes[j].identifier)
          )
            return [3 /*break*/, 8];
          _d = (_c = load).push;
          return [4 /*yield*/, loadPiximiImage(images[imageIndex])];
        case 7:
          _d.apply(_c, [_e.sent()]);
          _e.label = 8;
        case 8:
          ++i;
          return [3 /*break*/, 6];
        case 9:
          testImages.push(load);
          _e.label = 10;
        case 10:
          ++j;
          return [3 /*break*/, 1];
        case 11:
          return [
            2 /*return*/,
            {
              trainAndValidationImages: trainAndValidationImages,
              testImages: testImages
            }
          ];
      }
    });
  });
}
/**
 * Create train/validation dataset and test dataset with unique images
 */
function createDatasets(
  dataset_url,
  classes,
  trainSize,
  testSize,
  loadFunction
) {
  return __awaiter(this, void 0, void 0, function() {
    var listNumbers,
      i,
      trainAndValidationIndeces,
      testIndices,
      trainAndValidationImages,
      testImages,
      _i,
      classes_1,
      c,
      load,
      _a,
      trainAndValidationIndeces_1,
      i,
      _b,
      _c,
      _d,
      testIndices_1,
      i,
      _e,
      _f;
    return __generator(this, function(_g) {
      switch (_g.label) {
        case 0:
          listNumbers = [];
          for (i = 0; i < trainSize + testSize; ++i) listNumbers[i] = i;
          listNumbers = fisherYates(listNumbers, seed); // shuffle
          trainAndValidationIndeces = listNumbers.slice(0, trainSize);
          testIndices = listNumbers.slice(trainSize, trainSize + testSize);
          trainAndValidationImages = [];
          testImages = [];
          (_i = 0), (classes_1 = classes);
          _g.label = 1;
        case 1:
          if (!(_i < classes_1.length)) return [3 /*break*/, 5];
          c = classes_1[_i];
          load = [];
          for (
            _a = 0, trainAndValidationIndeces_1 = trainAndValidationIndeces;
            _a < trainAndValidationIndeces_1.length;
            _a++
          ) {
            i = trainAndValidationIndeces_1[_a];
            load.push(loadFunction(c, i, dataset_url));
          }
          _c = (_b = trainAndValidationImages).push;
          return [4 /*yield*/, Promise.all(load)];
        case 2:
          _c.apply(_b, [_g.sent()]);
          load = [];
          for (
            _d = 0, testIndices_1 = testIndices;
            _d < testIndices_1.length;
            _d++
          ) {
            i = testIndices_1[_d];
            load.push(loadFunction(c, i, dataset_url));
          }
          _f = (_e = testImages).push;
          return [4 /*yield*/, Promise.all(load)];
        case 3:
          _f.apply(_e, [_g.sent()]);
          _g.label = 4;
        case 4:
          _i++;
          return [3 /*break*/, 1];
        case 5:
          return [
            2 /*return*/,
            {
              trainAndValidationImages: trainAndValidationImages,
              testImages: testImages
            }
          ];
      }
    });
  });
}
/**
 * Shuffle an array of Float32Array or Samples using Fisher-Yates algorithm
 * Takes an optional seed value to make shuffling predictable
 */
function fisherYates(array, seed) {
  var _a;
  var length = array.length;
  var shuffled = array.slice(0);
  for (var i = length - 1; i > 0; i -= 1) {
    var randomIndex = void 0;
    if (seed) {
      randomIndex = Math.floor(seed() * (i + 1));
    } else {
      randomIndex = Math.floor(Math.random() * (i + 1));
    }
    (_a = [shuffled[randomIndex], shuffled[i]]),
      (shuffled[i] = _a[0]),
      (shuffled[randomIndex] = _a[1]);
  }
  return shuffled;
}
/**
 * Output loss and accuracy results at the end of training
 * Also evaluate the test dataset
 */
function showMetrics(alpha, time, logs, testAccuracy) {
  var lastEpoch = logs[logs.length - 1];
  var header = "α=" + alpha + ", t=" + (time / 1000).toFixed(1) + "s";
  var table = new Table({
    head: [header, "Accuracy", "Loss"],
    colWidths: [18, 10, 10]
  });
  table.push(
    ["Train", lastEpoch.acc.toFixed(3), lastEpoch.loss.toFixed(5)],
    ["Validation", lastEpoch.val_acc.toFixed(3), lastEpoch.val_loss.toFixed(5)]
  );
  console.log("\n" + table.toString());
}
function testModel(
  model,
  alpha,
  classes,
  trainAndValidationImages,
  testImages,
  testSizePerClass,
  epochs,
  learningRate,
  showEpochResults,
  earlyStopEpoch
) {
  if (showEpochResults === void 0) {
    showEpochResults = false;
  }
  if (earlyStopEpoch === void 0) {
    earlyStopEpoch = epochs;
  }
  return __awaiter(this, void 0, void 0, function() {
    var logs, time;
    var _this = this;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          model.setLabels(classes);
          model.setSeed(SEED_WORD); // set a seed to shuffle predictably
          logs = [];
          time = 0;
          return [
            4 /*yield*/,
            tf.nextFrame().then(function() {
              return __awaiter(_this, void 0, void 0, function() {
                var index,
                  _i,
                  trainAndValidationImages_1,
                  imgSet,
                  _a,
                  imgSet_1,
                  img,
                  start,
                  end;
                return __generator(this, function(_b) {
                  switch (_b.label) {
                    case 0:
                      index = 0;
                      (_i = 0),
                        (trainAndValidationImages_1 = trainAndValidationImages);
                      _b.label = 1;
                    case 1:
                      if (!(_i < trainAndValidationImages_1.length))
                        return [3 /*break*/, 7];
                      imgSet = trainAndValidationImages_1[_i];
                      (_a = 0), (imgSet_1 = imgSet);
                      _b.label = 2;
                    case 2:
                      if (!(_a < imgSet_1.length)) return [3 /*break*/, 5];
                      img = imgSet_1[_a];
                      return [4 /*yield*/, model.addExample(index, img)];
                    case 3:
                      _b.sent();
                      _b.label = 4;
                    case 4:
                      _a++;
                      return [3 /*break*/, 2];
                    case 5:
                      index++;
                      _b.label = 6;
                    case 6:
                      _i++;
                      return [3 /*break*/, 1];
                    case 7:
                      start = window.performance.now();
                      return [
                        4 /*yield*/,
                        model.train(
                          {
                            denseUnits: 100,
                            epochs: epochs,
                            learningRate: learningRate,
                            batchSize: 16
                          },
                          tfvis.show.fitCallbacks(surface, ["loss", "acc"])
                        )
                      ];
                    case 8:
                      _b.sent();
                      end = window.performance.now();
                      time = end - start;
                      return [2 /*return*/];
                  }
                });
              });
            })
          ];
        case 1:
          _a.sent();
          showMetrics(alpha, time, logs);
          return [2 /*return*/, logs[logs.length - 1]];
      }
    });
  });
}
function testMobilenet(
  dataset_url,
  version,
  loadFunction,
  maxImages,
  earlyStop
) {
  if (maxImages === void 0) {
    maxImages = 200;
  }
  if (earlyStop === void 0) {
    earlyStop = false;
  }
  return __awaiter(this, void 0, void 0, function() {
    var metadata,
      classLabels,
      NUM_IMAGE_PER_CLASS,
      TRAIN_VALIDATION_SIZE_PER_CLASS,
      table,
      datasets,
      trainAndValidationImages,
      testImages,
      MOBILENET_VERSION,
      VALID_ALPHAS,
      EPOCHS,
      LEARNING_RATE,
      earlyStopEpochs,
      _i,
      VALID_ALPHAS_1,
      a,
      lineStart,
      lineEnd,
      teachableMobileNetV2,
      lastEpoch;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, fetch(dataset_url + "metadata.json")];
        case 1:
          return [4 /*yield*/, _a.sent().json()];
        case 2:
          metadata = _a.sent();
          classLabels = metadata.classes;
          NUM_IMAGE_PER_CLASS = Math.ceil(maxImages / classLabels.length);
          if (
            NUM_IMAGE_PER_CLASS > Math.min.apply(Math, metadata.samplesPerClass)
          ) {
            NUM_IMAGE_PER_CLASS = Math.min.apply(
              Math,
              metadata.samplesPerClass
            );
          }
          TRAIN_VALIDATION_SIZE_PER_CLASS = NUM_IMAGE_PER_CLASS;
          table = new Table();
          table.push({
            "train/validation size":
              TRAIN_VALIDATION_SIZE_PER_CLASS * classLabels.length
          });
          console.log("\n" + table.toString());
          return [
            4 /*yield*/,
            createDatasets(
              dataset_url,
              classLabels,
              TRAIN_VALIDATION_SIZE_PER_CLASS,
              0,
              loadFunction
            )
          ];
        case 3:
          datasets = _a.sent();
          trainAndValidationImages = datasets.trainAndValidationImages;
          testImages = datasets.testImages;
          MOBILENET_VERSION = version;
          VALID_ALPHAS = [0.35];
          EPOCHS = 50;
          LEARNING_RATE = 0.001;
          if (version === 1) {
            LEARNING_RATE = 0.0001;
            VALID_ALPHAS = [0.25];
            EPOCHS = 20;
          }
          earlyStopEpochs = earlyStop ? 5 : EPOCHS;
          (_i = 0), (VALID_ALPHAS_1 = VALID_ALPHAS);
          _a.label = 4;
        case 4:
          if (!(_i < VALID_ALPHAS_1.length)) return [3 /*break*/, 8];
          a = VALID_ALPHAS_1[_i];
          lineStart = "\n//====================================";
          lineEnd = "====================================//\n\n";
          console.log(lineStart);
          return [
            4 /*yield*/,
            tm.createTeachable(
              {tfjsVersion: tf.version.tfjs},
              {version: MOBILENET_VERSION, alpha: a}
            )
          ];
        case 5:
          teachableMobileNetV2 = _a.sent();
          return [
            4 /*yield*/,
            testModel(
              teachableMobileNetV2,
              a,
              classLabels,
              trainAndValidationImages,
              testImages,
              0,
              EPOCHS,
              LEARNING_RATE,
              false,
              earlyStopEpochs
            )
          ];
        case 6:
          lastEpoch = _a.sent();
          // assert.isTrue(accuracyV2 > 0.7);
          console.log(lineEnd);
          return [
            2 /*return*/,
            {model: teachableMobileNetV2, lastEpoch: lastEpoch}
          ];
        case 7:
          _i++;
          return [3 /*break*/, 4];
        case 8:
          return [2 /*return*/];
      }
    });
  });
}
var optimizationAlgorithms = {
  adadelta: tensorflow.train.adadelta,
  adam: tensorflow.train.adam,
  adamax: tensorflow.train.adamax,
  rmsprop: tensorflow.train.rmsprop,
  sgd: tensorflow.train.sgd
};
var lossFunctions = {
  absoluteDifference: tensorflow.losses.absoluteDifference,
  cosineDistance: tensorflow.losses.cosineDistance,
  hingeLoss: tensorflow.losses.hingeLoss,
  huberLoss: tensorflow.losses.huberLoss,
  logLoss: tensorflow.losses.logLoss,
  meanSquaredError: tensorflow.losses.meanSquaredError,
  sigmoidCrossEntropy: tensorflow.losses.sigmoidCrossEntropy,
  categoricalCrossentropy: tensorflow.losses.softmaxCrossEntropy
};
var useStyles = styles_1.makeStyles(FitClassifierDialog_css_1.styles);
exports.FitClassifierDialog = function(props) {
  var _a;
  var categories = props.categories,
    closeDialog = props.closeDialog,
    images = props.images,
    openedDialog = props.openedDialog,
    openedDrawer = props.openedDrawer,
    setImagesPartition = props.setImagesPartition,
    datasetInitialized = props.datasetInitialized,
    setDatasetInitialized = props.setDatasetInitialized;
  var styles = useStyles({});
  // if (images.length != 0) {
  //   const [src, setSrc] = useState(images[0].data);
  // }
  var _b = react_1.useState(new ImageJS.Image()),
    example = _b[0],
    setExample = _b[1];
  // const openImage = async () => {
  //   console.log(src);
  //   const image = await ImageJS.Image.load(src);
  //   setExample(image);
  // };
  // useEffect(() => {
  //   // console.log('foo');
  //   // openImage();
  //   // console.log(example.getHistograms());
  // });
  // assign each image to train- test- or validation- set
  var initializeDatasets = function() {
    if (datasetInitialized) {
      return;
    }
    var partitions = [];
    images.forEach(function(image) {
      var setItentifier = dataset_1.assignToSet();
      partitions.push(setItentifier);
    });
    setImagesPartition(partitions);
    setDatasetInitialized(true);
  };
  // Preprocessing clicks
  var _c = React.useState(false),
    paddingOption1 = _c[0],
    setPaddingOption1 = _c[1];
  var onPaddingOption1Click = function() {
    setPaddingOption1(!paddingOption1);
  };
  var _d = React.useState(false),
    paddingOption2 = _d[0],
    setPaddingOption2 = _d[1];
  var onpaddingOption2Click = function() {
    setPaddingOption2(!paddingOption2);
  };
  var _e = React.useState(false),
    dataAugmentation = _e[0],
    setDataAugmentation = _e[1];
  var onDataAugmentationClick = function() {
    setDataAugmentation(!dataAugmentation);
  };
  var _f = React.useState(0),
    lowerPercentile = _f[0],
    setLowerPercentile = _f[1];
  var onLowerPercentileChange = function(event) {
    var target = event.target;
    var value = Number(target.value);
    setLowerPercentile(value);
  };
  var _g = React.useState(1),
    upperPercentile = _g[0],
    setUpperPercentile = _g[1];
  var onUpperPercentileChange = function(event) {
    var target = event.target;
    var value = Number(target.value);
    setUpperPercentile(value);
  };
  var _h = react_1.useState(false),
    collapsedPreprocessingList = _h[0],
    setCollapsedPreprocessingList = _h[1];
  var onPreprocessingListClick = function() {
    // shows or hides preprocessing list in interface
    setCollapsedPreprocessingList(!collapsedPreprocessingList);
  };
  var onPreprocessingClick = function(
    lowerPercentile,
    upperPercentile,
    labeledData
  ) {
    return __awaiter(void 0, void 0, void 0, function() {
      var rescaledSet, resizedSet, augmentedSet;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [
              4 /*yield*/,
              preprocessing_1.rescaleData(
                lowerPercentile,
                upperPercentile,
                labeledData
              )
            ];
          case 1:
            rescaledSet = _a.sent();
            return [
              4 /*yield*/,
              preprocessing_1.resizeData(
                paddingOption1,
                paddingOption2,
                labeledData
              )
            ];
          case 2:
            resizedSet = _a.sent();
            return [
              4 /*yield*/,
              preprocessing_1.augmentData(dataAugmentation, labeledData)
            ];
          case 3:
            augmentedSet = _a.sent();
            return [2 /*return*/];
        }
      });
    });
  };
  var _j = React.useState([60, 80]),
    datasetSplits = _j[0],
    setDatasetSplits = _j[1];
  var handleChange = function(event, newValue) {
    setDatasetSplits(newValue);
    dataset_1.setTestsetRatio(datasetSplits[1] - datasetSplits[0]);
  };
  function valuetext(value) {
    return value + "%";
  }
  var _k = hooks_1.useCollapseList(),
    collapsedList = _k.collapsedList,
    collapseList = _k.collapseList;
  var _l = react_1.useState(false),
    collapsedClasssifierSettingsList = _l[0],
    setCollapsedClasssifierSettingsList = _l[1];
  var onClasssifierSettingsListClick = function() {
    setCollapsedClasssifierSettingsList(!collapsedClasssifierSettingsList);
  };
  var _m = react_1.useState(false),
    collapsedDatasetSettingsList = _m[0],
    setCollapsedDatasetSettingsList = _m[1];
  var onDatasetSettingsListClick = function() {
    setCollapsedDatasetSettingsList(!collapsedDatasetSettingsList);
  };
  var _o = react_1.useState(false),
    stopTraining = _o[0],
    setStopTraining = _o[1];
  var _p = react_1.useState(32),
    batchSize = _p[0],
    setBatchSize = _p[1];
  var _q = react_1.useState(10),
    epochs = _q[0],
    setEpochs = _q[1];
  var _r = react_1.useState("adam"),
    optimizationAlgorithm = _r[0],
    setOptimizationAlgorithm = _r[1];
  var _s = react_1.useState(0.01),
    learningRate = _s[0],
    setLearningRate = _s[1];
  var _t = react_1.useState("meanSquaredError"),
    lossFunction = _t[0],
    setLossFunction = _t[1];
  var _u = react_1.useState("meanSquaredError"),
    trainStatus = _u[0],
    setTrainStatus = _u[1];
  var _v = react_1.useState("224, 224, 3"),
    inputShape = _v[0],
    setInputShape = _v[1];
  var _w = react_1.useState([]),
    trainingLossHistory = _w[0],
    setTrainingLossHistory = _w[1];
  var updateLossHistory = function(x, y) {
    var history = trainingLossHistory;
    history.push({x: x, y: y});
    setTrainingLossHistory(history);
  };
  var _x = react_1.useState([]),
    trainingAccuracyHistory = _x[0],
    setTrainingAccuracyHistory = _x[1];
  var updateAccuracHistory = function(x, y) {
    var history = trainingAccuracyHistory;
    history.push({x: x, y: y});
    setTrainingAccuracyHistory(history);
  };
  var _y = react_1.useState([]),
    trainingValidationAccuracyHistory = _y[0],
    setTrainingValidationAccuracyHistory = _y[1];
  var updateValidationAccuracHistory = function(x, y) {
    var history = trainingValidationAccuracyHistory;
    history.push({x: x, y: y});
    setTrainingValidationAccuracyHistory(history);
  };
  var _z = react_1.useState([]),
    trainingValidationLossHistory = _z[0],
    setTrainingValidationLossHistory = _z[1];
  var updateValidationLossHistory = function(x, y) {
    var history = trainingValidationLossHistory;
    history.push({x: x, y: y});
    setTrainingValidationLossHistory(history);
  };
  var onBatchSizeChange = function(event) {
    var target = event.target;
    var value = Number(target.value);
    setBatchSize(value);
  };
  var onEpochsChange = function(event) {
    var target = event.target;
    var value = Number(target.value);
    setEpochs(value);
  };
  var onStopTrainingChange = function() {
    setStopTraining(true);
  };
  var resetStopTraining = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        setStopTraining(false);
        return [2 /*return*/];
      });
    });
  };
  var onInputShapeChange = function(event) {
    var target = event.target;
    setInputShape(target.value);
  };
  var onLearningRateChange = function(event) {
    var target = event.target;
    var value = Number(target.value);
    setLearningRate(value);
  };
  var onLossFunctionChange = function(event) {
    var target = event.target;
    setLossFunction(target.value);
  };
  var onOptimizationAlgorithmChange = function(event) {
    var target = event.target;
    setOptimizationAlgorithm(target.value);
  };
  var className = classnames_1["default"](
    styles.content,
    styles.contentLeft,
    ((_a = {}),
    (_a[styles.contentShift] = openedDrawer),
    (_a[styles.contentShiftLeft] = openedDrawer),
    _a)
  );
  var classes = {
    paper: styles.paper
  };
  var lossLabelElement = document.getElementById("loss-label");
  var accuracyLabelElement = document.getElementById("accuracy-label");
  var lossValues = [[], []];
  function plotLoss(batch, loss, set) {
    var series = set === "train" ? 0 : 1;
    // @ts-ignore
    lossValues[series].push({x: batch, y: loss});
    var lossContainer = document.getElementById("loss-canvas");
    tfvis.render.linechart(
      lossContainer,
      {values: lossValues, series: ["train", "validation"]},
      {
        xLabel: "Batch #",
        yLabel: "Loss",
        width: 400,
        height: 300
      }
    );
    lossLabelElement.innerText = "last loss: " + loss.toFixed(3);
  }
  function testMobilenet(
    dataset_url,
    version,
    loadFunction,
    maxImages,
    earlyStop
  ) {
    if (maxImages === void 0) {
      maxImages = 200;
    }
    if (earlyStop === void 0) {
      earlyStop = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var metadata,
        classLabels,
        i,
        NUM_IMAGE_PER_CLASS,
        TRAIN_VALIDATION_SIZE_PER_CLASS,
        table,
        classes,
        datasets,
        trainAndValidationImages,
        testImages,
        MOBILENET_VERSION,
        VALID_ALPHAS,
        EPOCHS,
        LEARNING_RATE,
        earlyStopEpochs,
        _i,
        VALID_ALPHAS_2,
        a,
        lineStart,
        lineEnd,
        teachableMobileNetV2,
        lastEpoch;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, fetch(dataset_url + "metadata.json")];
          case 1:
            return [4 /*yield*/, _a.sent().json()];
          case 2:
            metadata = _a.sent();
            classLabels = [];
            for (i = 0; i < categories.length; i++) {
              if (
                categories[i].identifier !==
                "00000000-0000-0000-0000-000000000000"
              ) {
                classLabels.push(categories[i].identifier);
              }
            }
            console.log(classLabels);
            NUM_IMAGE_PER_CLASS = Math.ceil(maxImages / classLabels.length);
            if (
              NUM_IMAGE_PER_CLASS >
              Math.min.apply(Math, metadata.samplesPerClass)
            ) {
              NUM_IMAGE_PER_CLASS = Math.min.apply(
                Math,
                metadata.samplesPerClass
              );
            }
            TRAIN_VALIDATION_SIZE_PER_CLASS = NUM_IMAGE_PER_CLASS;
            table = new Table();
            table.push({
              "train/validation size":
                TRAIN_VALIDATION_SIZE_PER_CLASS * classLabels.length
            });
            console.log("\n" + table.toString());
            classes = categories.filter(function(category) {
              return (
                category.identifier !== "00000000-0000-0000-0000-000000000000"
              );
            });
            return [
              4 /*yield*/,
              createDatasetsFromPiximiImages(images, classes)
            ];
          case 3:
            datasets = _a.sent();
            trainAndValidationImages = datasets.trainAndValidationImages;
            testImages = datasets.testImages;
            MOBILENET_VERSION = version;
            VALID_ALPHAS = [0.35];
            EPOCHS = 50;
            LEARNING_RATE = 0.001;
            if (version === 1) {
              LEARNING_RATE = 0.0001;
              VALID_ALPHAS = [0.25];
              EPOCHS = 20;
            }
            earlyStopEpochs = earlyStop ? 5 : EPOCHS;
            (_i = 0), (VALID_ALPHAS_2 = VALID_ALPHAS);
            _a.label = 4;
          case 4:
            if (!(_i < VALID_ALPHAS_2.length)) return [3 /*break*/, 8];
            a = VALID_ALPHAS_2[_i];
            lineStart = "\n//====================================";
            lineEnd = "====================================//\n\n";
            console.log(lineStart);
            return [
              4 /*yield*/,
              tm.createTeachable(
                {tfjsVersion: tf.version.tfjs},
                {version: MOBILENET_VERSION, alpha: a}
              )
            ];
          case 5:
            teachableMobileNetV2 = _a.sent();
            return [
              4 /*yield*/,
              testModel(
                teachableMobileNetV2,
                a,
                classLabels,
                trainAndValidationImages,
                testImages,
                0,
                EPOCHS,
                LEARNING_RATE,
                false,
                earlyStopEpochs
              )
            ];
          case 6:
            lastEpoch = _a.sent();
            // assert.isTrue(accuracyV2 > 0.7);
            console.log(lineEnd);
            return [
              2 /*return*/,
              {model: teachableMobileNetV2, lastEpoch: lastEpoch}
            ];
          case 7:
            _i++;
            return [3 /*break*/, 4];
          case 8:
            return [2 /*return*/];
        }
      });
    });
  }
  function testModel(
    model,
    alpha,
    classes,
    trainAndValidationImages,
    testImages,
    testSizePerClass,
    epochs,
    learningRate,
    showEpochResults,
    earlyStopEpoch
  ) {
    if (showEpochResults === void 0) {
      showEpochResults = false;
    }
    if (earlyStopEpoch === void 0) {
      earlyStopEpoch = epochs;
    }
    return __awaiter(this, void 0, void 0, function() {
      var logs, time, epochLogs;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            model.setLabels(classes);
            model.setSeed(SEED_WORD); // set a seed to shuffle predictably
            logs = [];
            time = 0;
            epochLogs = [];
            return [
              4 /*yield*/,
              tf.nextFrame().then(function() {
                return __awaiter(_this, void 0, void 0, function() {
                  var index,
                    _i,
                    trainAndValidationImages_2,
                    imgSet,
                    _a,
                    imgSet_2,
                    img,
                    start,
                    end;
                  return __generator(this, function(_b) {
                    switch (_b.label) {
                      case 0:
                        index = 0;
                        (_i = 0),
                          (trainAndValidationImages_2 = trainAndValidationImages);
                        _b.label = 1;
                      case 1:
                        if (!(_i < trainAndValidationImages_2.length))
                          return [3 /*break*/, 7];
                        imgSet = trainAndValidationImages_2[_i];
                        (_a = 0), (imgSet_2 = imgSet);
                        _b.label = 2;
                      case 2:
                        if (!(_a < imgSet_2.length)) return [3 /*break*/, 5];
                        img = imgSet_2[_a];
                        return [4 /*yield*/, model.addExample(index, img)];
                      case 3:
                        _b.sent();
                        _b.label = 4;
                      case 4:
                        _a++;
                        return [3 /*break*/, 2];
                      case 5:
                        index++;
                        _b.label = 6;
                      case 6:
                        _i++;
                        return [3 /*break*/, 1];
                      case 7:
                        start = window.performance.now();
                        return [
                          4 /*yield*/,
                          model.train(
                            {
                              denseUnits: 100,
                              epochs: epochs,
                              learningRate: learningRate,
                              batchSize: 16
                            },
                            {
                              onEpochEnd: function(epoch, log) {
                                var accSurface = {
                                  name: "Accuracy History",
                                  tab: "Training"
                                };
                                var lossSurface = {
                                  name: "Loss History",
                                  tab: "Training"
                                };
                                var options = {
                                  xLabel: "Epoch",
                                  yLabel: "Value",
                                  yAxisDomain: [0, 1],
                                  seriesColors: ["teal", "tomato"]
                                }; // Prep the data
                                epochLogs.push(log);
                                var acc = epochLogs.map(function(log, i) {
                                  return {
                                    x: i,
                                    y: log.acc
                                  };
                                });
                                var valAcc = epochLogs.map(function(log, i) {
                                  return {
                                    x: i,
                                    y: log.val_acc
                                  };
                                });
                                var loss = epochLogs.map(function(log, i) {
                                  return {
                                    x: i,
                                    y: log.loss
                                  };
                                });
                                var valLoss = epochLogs.map(function(log, i) {
                                  return {
                                    x: i,
                                    y: log.val_loss
                                  };
                                });
                                var accData = {
                                  values: [acc, valAcc],
                                  // Custom names for the series
                                  series: ["Accuracy", "Validation Accuracy"] // render the chart
                                };
                                var lossData = {
                                  values: [loss, valLoss],
                                  // Custom names for the series
                                  series: ["Loss", "Validation Loss"] // render the chart
                                };
                                // @ts-ignore
                                tfvis.render.linechart(
                                  accSurface,
                                  accData,
                                  options
                                );
                                // @ts-ignore
                                tfvis.render.linechart(
                                  lossSurface,
                                  lossData,
                                  options
                                );
                              }
                            }
                          )
                        ];
                      case 8:
                        _b.sent();
                        end = window.performance.now();
                        time = end - start;
                        return [2 /*return*/];
                    }
                  });
                });
              })
            ];
          case 1:
            _a.sent();
            //showMetrics(alpha, time, logs);
            return [2 /*return*/, logs[logs.length - 1]];
        }
      });
    });
  }
  var onFit = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        vis.open();
        // testMobilenet(BEAN_DATASET_URL, 2, loadPngImage);
        testMobilenet(FLOWER_DATASET_URL, 1, loadPngImage);
        return [2 /*return*/];
      });
    });
  };
  var LossFunction;
  (function(LossFunction) {
    LossFunction[(LossFunction["absoluteDifference"] = 0)] =
      "absoluteDifference";
    LossFunction[(LossFunction["cosineDistance"] = 1)] = "cosineDistance";
    LossFunction[(LossFunction["hingeLoss"] = 2)] = "hingeLoss";
    LossFunction[(LossFunction["huberLoss"] = 3)] = "huberLoss";
    LossFunction[(LossFunction["logLoss"] = 4)] = "logLoss";
    LossFunction[(LossFunction["meanSquaredError"] = 5)] = "meanSquaredError";
    LossFunction[(LossFunction["sigmoidCrossEntropy"] = 6)] =
      "sigmoidCrossEntropy";
    LossFunction[(LossFunction["categoricalCrossentropy"] = 7)] =
      "categoricalCrossentropy";
  })(LossFunction || (LossFunction = {}));
  // specifies interface
  return (
    // @ts-ignore
    React.createElement(
      core_1.Dialog,
      {
        className: className,
        classes: classes,
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        fullScreen: true,
        onClose: closeDialog,
        open: openedDialog,
        TransitionComponent: DialogTransition_1.DialogTransition,
        style: {zIndex: 900}
      },
      React.createElement(DialogAppBar_1.DialogAppBar, {
        onStopTrainingChange: onStopTrainingChange,
        closeDialog: closeDialog,
        fit: onFit,
        openedDrawer: openedDrawer
      }),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.DialogContent,
        null,
        React.createElement(
          core_1.List,
          {dense: true},
          React.createElement(
            core_1.ListItem,
            {
              button: true,
              onClick: onPreprocessingListClick,
              style: {padding: "12px 0px"}
            },
            "// @ts-ignore",
            React.createElement(
              core_1.ListItemIcon,
              null,
              collapsedPreprocessingList
                ? React.createElement(ExpandLess_1["default"], null)
                : React.createElement(ExpandMore_1["default"], null)
            ),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(core_1.ListItemText, {
              primary: "Preprocessing",
              style: {fontSize: "1em"}
            })
          ),
          // @ts-ignore
          "// @ts-ignore",
          React.createElement(
            core_1.Collapse,
            {
              in: collapsedPreprocessingList,
              timeout: "auto",
              unmountOnExit: true
            },
            "// @ts-ignore",
            React.createElement(
              core_1.Tooltip,
              {title: "Apply Preprocessing Settings", placement: "bottom"},
              "// @ts-ignore",
              React.createElement(
                core_1.Button,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: onPreprocessingClick
                },
                "Apply Preprocessing"
              )
            ),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(
              Typography_1["default"],
              {id: "rescaling", gutterBottom: true},
              "Pixel Intensity Rescaling"
            ),
            React.createElement(RescalingForm_1.RescalingForm, {
              onLowerPercentileChange: onLowerPercentileChange,
              onUpperPercentileChange: onUpperPercentileChange,
              lowerPercentile: lowerPercentile,
              upperPercentile: upperPercentile,
              closeDialog: closeDialog,
              openedDialog: openedDialog
            }),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(
              Typography_1["default"],
              {id: "augmentation", gutterBottom: true},
              "Data Augmentation"
            ),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(
              core_1.FormGroup,
              {row: true},
              "// @ts-ignore",
              React.createElement(core_1.FormControlLabel, {
                control:
                  // @ts-ignore
                  React.createElement(core_1.Checkbox, {
                    value: "randomDataAugmentation"
                  }),
                label: "Random Data Augmentation"
              })
            ),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(
              Typography_1["default"],
              {id: "resizing", gutterBottom: true},
              "Resizing"
            ),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(
              core_1.FormGroup,
              {row: true},
              "// @ts-ignore",
              React.createElement(
                core_1.FormControlLabel,
                // @ts-ignore
                {
                  // @ts-ignore
                  control: React.createElement(core_1.Checkbox, {
                    value: "paddingOption1"
                  }),
                  label: "Padding Option 1"
                }
              )
            ),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(
              core_1.FormGroup,
              {row: true},
              "// @ts-ignore",
              React.createElement(
                core_1.FormControlLabel,
                // @ts-ignore
                {
                  // @ts-ignore
                  control: React.createElement(core_1.Checkbox, {
                    value: "paddingOption2"
                  }),
                  label: "Padding Option 2"
                }
              )
            )
          ),
          React.createElement(
            core_1.ListItem,
            {
              button: true,
              onClick: onClasssifierSettingsListClick,
              style: {padding: "12px 0px"}
            },
            "// @ts-ignore",
            React.createElement(
              core_1.ListItemIcon,
              null,
              collapsedClasssifierSettingsList
                ? React.createElement(ExpandLess_1["default"], null)
                : React.createElement(ExpandMore_1["default"], null)
            ),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(core_1.ListItemText, {
              primary: "Classifier Settings",
              style: {fontSize: "20px"}
            })
          ),
          // @ts-ignore
          "// @ts-ignore",
          React.createElement(
            core_1.Collapse,
            {
              in: collapsedClasssifierSettingsList,
              timeout: "auto",
              unmountOnExit: true
            },
            React.createElement(Form_1.Form, {
              batchSize: batchSize,
              closeDialog: closeDialog,
              epochs: epochs,
              inputShape: inputShape,
              learningRate: learningRate,
              lossFunction: lossFunction,
              onBatchSizeChange: onBatchSizeChange,
              onEpochsChange: onEpochsChange,
              onInputShapeChange: onInputShapeChange,
              onLearningRateChange: onLearningRateChange,
              onLossFunctionChange: onLossFunctionChange,
              onOptimizationAlgorithmChange: onOptimizationAlgorithmChange,
              // onDataAugmentationChange={onDataAugmentationChange}
              openedDialog: openedDialog,
              optimizationAlgorithm: optimizationAlgorithm
            })
          ),
          React.createElement(
            core_1.ListItem,
            {
              button: true,
              onClick: onDatasetSettingsListClick,
              style: {padding: "12px 0px"}
            },
            "// @ts-ignore",
            React.createElement(
              core_1.ListItemIcon,
              null,
              collapsedDatasetSettingsList
                ? React.createElement(ExpandLess_1["default"], null)
                : React.createElement(ExpandMore_1["default"], null)
            ),
            // @ts-ignore
            "// @ts-ignore",
            React.createElement(core_1.ListItemText, {
              primary: "Dataset Settings",
              style: {fontSize: "1em"}
            })
          ),
          // @ts-ignore
          "// @ts-ignore",
          React.createElement(
            core_1.Collapse,
            {
              in: collapsedDatasetSettingsList,
              timeout: "auto",
              unmountOnExit: true
            },
            "// @ts-ignore",
            React.createElement(
              core_1.Tooltip,
              {title: "Initialize dataset", placement: "bottom"},
              React.createElement(
                core_1.Button,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: initializeDatasets
                },
                "Initialize Dataset"
              )
            ),
            React.createElement(
              "div",
              {style: {padding: "12px 0px", width: "300"}},
              "// @ts-ignore",
              React.createElement(
                Typography_1["default"],
                {id: "range-slider", gutterBottom: true},
                "Dataset Splits"
              ),
              // @ts-ignore
              "// @ts-ignore",
              React.createElement(Slider_1["default"], {
                value: datasetSplits,
                onChange: handleChange,
                valueLabelDisplay: "auto",
                "aria-labelledby": "range-slider",
                getAriaValueText: valuetext
              })
            )
          )
        )
      )
    )
  );
};
