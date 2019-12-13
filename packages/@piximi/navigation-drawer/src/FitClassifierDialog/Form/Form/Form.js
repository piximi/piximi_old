"use strict";
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
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
var React = __importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var OptimizationGrid_1 = require("../OptimizationGrid");
var core_1 = require("@material-ui/core");
var _ = __importStar(require("lodash"));
var lossFunctions = {
  absoluteDifference: "Absolute difference",
  cosineDistance: "Cosine distance",
  hingeLoss: "Hinge",
  huberLoss: "Huber",
  logLoss: "Log",
  meanSquaredError: "Mean squared error (MSE)",
  sigmoidCrossEntropy: "Sigmoid cross entropy",
  categoricalCrossentropy: "Categorical cross entropy"
};
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    expansionPanel: {
      boxShadow: "none"
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      marginRight: theme.spacing(1)
    },
    grow: {
      flexGrow: 1
    },
    form: {},
    appBar: {
      position: "relative",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
    },
    container: {
      // width: '100%',
      display: "flex",
      flexWrap: "wrap"
    },
    root: {
      zIndex: 1100
    },
    paper: {
      zIndex: 1100
    },
    paperFullScreen: {
      left: "280px"
    },
    menu: {
      // width: 200,
    },
    textField: {
      // marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      flexBasis: 300,
      width: "100%"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  });
});
exports.Form = function(props) {
  var batchSize = props.batchSize,
    closeDialog = props.closeDialog,
    epochs = props.epochs,
    inputShape = props.inputShape,
    learningRate = props.learningRate,
    lossFunction = props.lossFunction,
    onBatchSizeChange = props.onBatchSizeChange,
    onEpochsChange = props.onEpochsChange,
    onInputShapeChange = props.onInputShapeChange,
    onLearningRateChange = props.onLearningRateChange,
    onLossFunctionChange = props.onLossFunctionChange,
    onOptimizationAlgorithmChange = props.onOptimizationAlgorithmChange,
    openedDialog = props.openedDialog,
    optimizationAlgorithm = props.optimizationAlgorithm;
  var _a = React.useState({
      lossFunction: "meanSquaredError",
      optimizationAlgorithm: "adam"
    }),
    values = _a[0],
    setValues = _a[1];
  var onChange = function(name) {
    return function(event) {
      var _a;
      setValues(
        __assign(
          __assign({}, values),
          ((_a = {}), (_a[name] = event.target.value), _a)
        )
      );
    };
  };
  var classes = useStyles({});
  return React.createElement(
    "form",
    {className: classes.container, noValidate: true, autoComplete: "off"},
    React.createElement(OptimizationGrid_1.OptimizationGrid, {
      optimizationAlgorithm: optimizationAlgorithm,
      onOptimizationAlgorithmChange: onOptimizationAlgorithmChange,
      learningRate: learningRate,
      onLearningRateChange: onLearningRateChange
    }),
    React.createElement(
      core_1.Grid,
      {container: true, spacing: 2},
      React.createElement(
        core_1.Grid,
        {item: true, xs: 4},
        "// @ts-ignore",
        React.createElement(
          core_1.TextField,
          {
            id: "loss-function",
            select: true,
            label: "Loss function",
            className: classes.textField,
            value: lossFunction,
            onChange: onLossFunctionChange,
            SelectProps: {
              MenuProps: {
                className: classes.menu
              }
            },
            margin: "normal"
          },
          _.map(lossFunctions, function(v, k) {
            return React.createElement(
              core_1.MenuItem,
              {dense: true, key: k, value: k},
              v
            );
          })
        )
      )
    ),
    React.createElement(
      core_1.Grid,
      {container: true, spacing: 2},
      React.createElement(
        core_1.Grid,
        {item: true, xs: 2},
        "// @ts-ignore",
        React.createElement(core_1.TextField, {
          id: "batch-size",
          label: "Batch size",
          className: classes.textField,
          value: batchSize,
          onChange: onBatchSizeChange,
          type: "number",
          margin: "normal"
        })
      ),
      React.createElement(
        core_1.Grid,
        {item: true, xs: 2},
        "// @ts-ignore",
        React.createElement(core_1.TextField, {
          id: "epochs",
          label: "Epochs",
          className: classes.textField,
          value: epochs,
          onChange: onEpochsChange,
          margin: "normal",
          type: "number"
        })
      )
    )
  );
};
