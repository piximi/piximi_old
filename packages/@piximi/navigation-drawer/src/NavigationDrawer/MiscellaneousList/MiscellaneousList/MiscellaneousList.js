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
var index_1 = require("../../index");
var core_1 = require("@material-ui/core");
exports.MiscellaneousList = function() {
  return React.createElement(
    core_1.List,
    {dense: true},
    React.createElement(index_1.SettingsListItem, null),
    React.createElement(index_1.SendFeedbackListItem, null),
    React.createElement(index_1.HelpListItem, null)
  );
};
