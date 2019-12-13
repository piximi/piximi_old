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
var OpenListItem_1 = require("../OpenListItem/OpenListItem");
var NewClassifierListItem_1 = require("../NewClassifierListItem");
var SaveListItem_1 = require("../SaveListItem/SaveListItem");
var core_1 = require("@material-ui/core");
exports.ApplicationList = function() {
  return React.createElement(
    core_1.List,
    {dense: true},
    React.createElement(NewClassifierListItem_1.NewClassifierListItem, null),
    React.createElement(OpenListItem_1.ConnectedOpenListItem, null),
    React.createElement(SaveListItem_1.ConnectedSaveListItem, null)
  );
};
