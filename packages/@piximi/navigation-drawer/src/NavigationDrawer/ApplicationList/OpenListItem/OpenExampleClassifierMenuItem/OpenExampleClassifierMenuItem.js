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
var hooks_1 = require("@piximi/hooks");
var ConnectedOpenExampleClassifierDialog_1 = require("../../../../OpenExampleClassifierDialog/ConnectedOpenExampleClassifierDialog");
var core_1 = require("@material-ui/core");
exports.OpenExampleClassifierMenuItem = function(props) {
  var closeMenu = props.closeMenu;
  var _a = hooks_1.useDialog(),
    openedDialog = _a.openedDialog,
    openDialog = _a.openDialog,
    closeDialog = _a.closeDialog;
  var onClick = function() {
    openDialog();
  };
  return (
    // @ts-ignore
    React.createElement(
      React.Fragment,
      null,
      React.createElement(
        core_1.MenuItem,
        {onClick: onClick},
        "// @ts-ignore",
        React.createElement(core_1.ListItemText, {
          primary: "Open example classifier"
        })
      ),
      React.createElement(
        ConnectedOpenExampleClassifierDialog_1.ConnectedOpenExampleClassifierDialog,
        {onClose: closeDialog, open: openedDialog, closeMenu: closeMenu}
      )
    )
  );
};
