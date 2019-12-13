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
var Feedback_1 = __importDefault(require("@material-ui/icons/Feedback"));
exports.SendFeedbackListItem = function() {
  return React.createElement(
    core_1.ListItem,
    {button: true, disabled: true},
    "// @ts-ignore",
    React.createElement(
      core_1.ListItemIcon,
      null,
      React.createElement(Feedback_1["default"], null)
    ),
    // @ts-ignore
    "// @ts-ignore",
    React.createElement(core_1.ListItemText, {primary: "Send feedback"})
  );
};
