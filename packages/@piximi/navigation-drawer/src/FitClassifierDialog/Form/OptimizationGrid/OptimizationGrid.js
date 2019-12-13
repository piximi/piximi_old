"use strict";
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
var core_1 = require("@material-ui/core");
var _ = __importStar(require("lodash"));
var optimizationAlgorithms = {
  adadelta: "Adadelta",
  adam: "Adam",
  adamax: "Adamax",
  rmsprop: "RMSProp",
  sgd: "Stochastic gradient descent (SGD)"
};
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    menu: {
      // width: 200,
    },
    textField: {
      // marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      flexBasis: 300,
      width: "100%"
    }
  });
});
exports.OptimizationGrid = function(props) {
  var optimizationAlgorithm = props.optimizationAlgorithm,
    onOptimizationAlgorithmChange = props.onOptimizationAlgorithmChange,
    learningRate = props.learningRate,
    onLearningRateChange = props.onLearningRateChange;
  var _a = React.useState({
      lossFunction: "softmaxCrossEntropy",
      optimizationAlgorithm: "adam"
    }),
    values = _a[0],
    setValues = _a[1];
  var classes = useStyles({});
  return React.createElement(
    core_1.Grid,
    {container: true, spacing: 2},
    React.createElement(
      core_1.Grid,
      {item: true, xs: 4},
      "// @ts-ignore",
      React.createElement(
        core_1.TextField,
        {
          id: "optimization-algorithm",
          select: true,
          label: "Optimization algorithm",
          className: classes.textField,
          value: optimizationAlgorithm,
          onChange: onOptimizationAlgorithmChange,
          SelectProps: {
            MenuProps: {
              className: classes.menu
            }
          },
          margin: "normal"
        },
        _.map(optimizationAlgorithms, function(v, k) {
          return React.createElement(
            core_1.MenuItem,
            {dense: true, key: k, value: k},
            v
          );
        })
      )
    ),
    React.createElement(
      core_1.Grid,
      {item: true, xs: 4},
      "// @ts-ignore",
      React.createElement(core_1.TextField, {
        id: "learning-rate",
        label: "Learning rate",
        className: classes.textField,
        value: learningRate,
        onChange: onLearningRateChange,
        margin: "normal",
        type: "number"
      })
    )
  );
};
