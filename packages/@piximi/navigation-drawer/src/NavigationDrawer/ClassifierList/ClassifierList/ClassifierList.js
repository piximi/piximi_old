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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var React = __importStar(require("react"));
var react_1 = require("react");
var ExpandLess_1 = __importDefault(require("@material-ui/icons/ExpandLess"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var hooks_1 = require("@piximi/hooks");
var ConnectedFitListItem_1 = require("../FitListItem/ConnectedFitListItem");
var ConnectedEvaluateListItem_1 = require("../EvaluateListItem/ConnectedEvaluateListItem");
var ConnectedPredictListItem_1 = require("../PredictListItem/ConnectedPredictListItem");
exports.ClassifierList = function() {
  var _a = hooks_1.useCollapseList(),
    collapsedList = _a.collapsedList,
    collapseList = _a.collapseList;
  var _b = react_1.useState(false),
    datasetInitialized = _b[0],
    setDatasetInitialized = _b[1];
  return React.createElement(
    core_1.List,
    {dense: true},
    React.createElement(
      core_1.ListItem,
      {button: true, onClick: collapseList},
      "// @ts-ignore",
      React.createElement(
        core_1.ListItemIcon,
        null,
        !collapsedList
          ? React.createElement(ExpandLess_1["default"], null)
          : React.createElement(ExpandMore_1["default"], null)
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(core_1.ListItemText, {primary: "Classifier"})
    ),
    // @ts-ignore
    "// @ts-ignore",
    React.createElement(
      core_1.Collapse,
      {in: !collapsedList, timeout: "auto", unmountOnExit: true},
      React.createElement(ConnectedFitListItem_1.ConnectedFitListItem, {
        datasetInitialized: datasetInitialized,
        setDatasetInitialized: setDatasetInitialized
      }),
      React.createElement(
        ConnectedEvaluateListItem_1.ConnectedEvaluateListItem,
        {
          datasetInitialized: datasetInitialized,
          setDatasetInitialized: setDatasetInitialized
        }
      ),
      React.createElement(
        ConnectedPredictListItem_1.ConnectedPredictListItem,
        null
      )
    )
  );
};
