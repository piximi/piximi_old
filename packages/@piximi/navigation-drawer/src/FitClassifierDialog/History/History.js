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
var victory_1 = require("victory");
var core_1 = require("@material-ui/core");
var History_css_1 = require("./History.css");
var useStyles = styles_1.makeStyles(History_css_1.styles);
exports.History = function(props) {
  var status = props.status,
    lossData = props.lossData,
    validationLossData = props.validationLossData,
    accuracyData = props.accuracyData,
    validationAccuracyData = props.validationAccuracyData;
  var classes = useStyles({});
  return React.createElement(
    core_1.Grid,
    {container: true, spacing: 2},
    React.createElement(
      core_1.Grid,
      {item: true, xs: 4},
      "// @ts-ignore",
      React.createElement(
        core_1.Typography,
        {classes: {root: classes.typography}},
        "status"
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.Typography,
        {classes: {root: classes.typography}},
        "Loss"
      ),
      React.createElement(
        victory_1.VictoryChart,
        {
          height: 100,
          padding: 0,
          theme: victory_1.VictoryTheme.material,
          width: 400
        },
        React.createElement(victory_1.VictoryAxis, {
          crossAxis: true,
          standalone: false,
          theme: victory_1.VictoryTheme.material
        }),
        React.createElement(victory_1.VictoryAxis, {
          crossAxis: true,
          dependentAxis: true,
          standalone: false,
          theme: victory_1.VictoryTheme.material
        }),
        React.createElement(victory_1.VictoryLine, {
          data: lossData,
          style: {data: {stroke: "red"}}
        }),
        React.createElement(victory_1.VictoryLine, {
          data: validationLossData,
          style: {data: {stroke: "green"}}
        })
      )
    ),
    React.createElement(
      core_1.Grid,
      {item: true, xs: 4},
      "// @ts-ignore",
      React.createElement(
        core_1.Typography,
        {classes: {root: classes.typography}},
        "Accuracy"
      ),
      React.createElement(
        victory_1.VictoryChart,
        {
          height: 100,
          padding: 0,
          theme: victory_1.VictoryTheme.material,
          width: 400
        },
        React.createElement(victory_1.VictoryAxis, {
          crossAxis: true,
          standalone: false,
          theme: victory_1.VictoryTheme.material
        }),
        React.createElement(victory_1.VictoryAxis, {
          crossAxis: true,
          dependentAxis: true,
          standalone: false,
          theme: victory_1.VictoryTheme.material
        }),
        React.createElement(victory_1.VictoryLine, {
          data: accuracyData,
          style: {data: {stroke: "red"}}
        }),
        React.createElement(victory_1.VictoryLine, {
          data: validationAccuracyData,
          style: {data: {stroke: "green"}}
        })
      )
    )
  );
};
