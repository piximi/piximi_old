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
var React = __importStar(require("react"));
var DialogAppBar_1 = require("../DialogAppBar");
var DialogTransition_1 = require("../DialogTransition");
var classnames_1 = __importDefault(require("classnames"));
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var styles_1 = require("@material-ui/styles");
var tensorflow = __importStar(require("@tensorflow/tfjs"));
var react_1 = require("react");
var EvaluateClassifierDialog_css_1 = require("./EvaluateClassifierDialog.css");
var dataset_1 = require("../../FitClassifierDialog/FitClassifierDialog/dataset");
var tfvis = __importStar(require("@tensorflow/tfjs-vis"));
var modelEvaluater_1 = require("./modelEvaluater");
var useStyles = styles_1.makeStyles(EvaluateClassifierDialog_css_1.styles);
function roundToFour(num) {
  // @ts-ignore
  return +(Math.round(num + "e+4") + "e-4");
}
exports.EvaluateClassifierDialog = function(props) {
  var _a;
  var categories = props.categories,
    closeDialog = props.closeDialog,
    images = props.images,
    openedDialog = props.openedDialog,
    openedDrawer = props.openedDrawer,
    datasetInitialized = props.datasetInitialized,
    setDatasetInitialized = props.setDatasetInitialized,
    setImagesPartition = props.setImagesPartition;
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
  var styles = useStyles({});
  var _b = react_1.useState(false),
    useCrossValidation = _b[0],
    setUseCrossValidation = _b[1];
  var _c = react_1.useState("not evaluated yet"),
    accuracy = _c[0],
    setAccuracy = _c[1];
  var onUseCrossValidationChange = function(event) {
    setUseCrossValidation(!useCrossValidation);
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
  var evaluate = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      var numberOfClasses,
        model,
        modelEvaluationResults,
        evaluationSet,
        evaluationSet,
        accuracy,
        confusionMatrixArray,
        values,
        i,
        row,
        j,
        lableCategories,
        lables,
        data;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            numberOfClasses = categories.length - 1;
            return [
              4 /*yield*/,
              tensorflow.loadLayersModel("indexeddb://mobilenet")
            ];
          case 1:
            model = _a.sent();
            if (!useCrossValidation) return [3 /*break*/, 4];
            return [4 /*yield*/, dataset_1.createTestSet(categories, images)];
          case 2:
            evaluationSet = _a.sent();
            return [
              4 /*yield*/,
              modelEvaluater_1.evaluateTensorflowModelCV(
                model,
                evaluationSet.data,
                evaluationSet.labels,
                numberOfClasses
              )
            ];
          case 3:
            modelEvaluationResults = _a.sent();
            return [3 /*break*/, 6];
          case 4:
            return [4 /*yield*/, dataset_1.createTestSet(categories, images)];
          case 5:
            evaluationSet = _a.sent();
            modelEvaluationResults = modelEvaluater_1.evaluateTensorflowModel(
              model,
              evaluationSet.data,
              evaluationSet.labels,
              numberOfClasses
            );
            _a.label = 6;
          case 6:
            accuracy = modelEvaluationResults.accuracy;
            setAccuracy(roundToFour(accuracy).toString());
            confusionMatrixArray = modelEvaluationResults.confusionMatrixArray;
            values = [];
            for (i = 0; i < numberOfClasses; i++) {
              row = [];
              for (j = 0; j < numberOfClasses; j++) {
                // @ts-ignore
                row.push(confusionMatrixArray[i + j]);
              }
              values.push(row);
            }
            lableCategories = categories.filter(function(category) {
              return (
                category.identifier !== "00000000-0000-0000-0000-000000000000"
              );
            });
            lables = lableCategories.map(function(category) {
              return category.description;
            });
            data = {values: values, tickLabels: lables};
            tfvis.render.confusionMatrix(
              exports.EvaluateClassifierDialog,
              data
            );
            return [2 /*return*/];
        }
      });
    });
  };
  var onEvaluate = function() {
    return __awaiter(void 0, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            initializeDatasets();
            return [4 /*yield*/, evaluate().then(function() {})];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  };
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
        style: {zIndex: 1203}
      },
      React.createElement(DialogAppBar_1.DialogAppBar, {
        closeDialog: closeDialog,
        evaluate: onEvaluate,
        openedDrawer: openedDrawer,
        useCrossValidation: useCrossValidation,
        onUseCrossValidationChange: onUseCrossValidationChange
      }),
      React.createElement(
        "div",
        null,
        React.createElement(
          Grid_1["default"],
          {container: true, spacing: 3},
          React.createElement(
            Grid_1["default"],
            {id: "evaluationID"},
            "// @ts-ignore",
            React.createElement(
              Paper_1["default"],
              {
                style: {
                  margin: "24px",
                  padding: "24px",
                  fontSize: "larger"
                }
              },
              "accuracy: ",
              accuracy
            )
          )
        )
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.DialogContent,
        {style: {padding: "0px", margin: "12px"}},
        React.createElement("div", {
          id: "tfjs-visor-container",
          style: {
            position: "absolute",
            height: "100%",
            width: "100%",
            padding: "12px"
          }
        })
      )
    )
  );
};
