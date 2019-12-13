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
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var hooks_1 = require("@piximi/hooks");
var ConnectedNewClassifierDialog_1 = require("../../../NewClassifierDialog/ConnectedNewClassifierDialog");
exports.NewClassifierListItem = function() {
  var _a = hooks_1.useDialog(),
    openedDialog = _a.openedDialog,
    openDialog = _a.openDialog,
    closeDialog = _a.closeDialog;
  return (
    // @ts-ignore
    React.createElement(
      React.Fragment,
      null,
      React.createElement(
        core_1.ListItem,
        {button: true, dense: true, onClick: openDialog},
        "// @ts-ignore",
        React.createElement(
          core_1.ListItemIcon,
          null,
          React.createElement(Add_1["default"], null)
        ),
        // @ts-ignore
        "// @ts-ignore",
        React.createElement(core_1.ListItemText, {
          primary: "New classifier\u2026"
        })
      ),
      React.createElement(
        ConnectedNewClassifierDialog_1.ConnectedNewClassifierDialog,
        {closeDialog: closeDialog, openedDialog: openedDialog}
      )
    )
  );
};
