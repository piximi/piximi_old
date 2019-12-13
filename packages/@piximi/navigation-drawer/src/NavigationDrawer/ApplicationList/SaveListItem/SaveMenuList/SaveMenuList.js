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
var MaterialUI = __importStar(require("@material-ui/core"));
var SaveAnnotationsAndPredictionsDialog_1 = require("../../../../SaveAnnotationsAndPredictionsDialog/");
var SaveWeightsDialog_1 = require("../../../../SaveWeightsDialog/");
var ConnectedSaveClassifierDialog_1 = require("../../../../SaveClassifierDialog/ConnectedSaveClassifierDialog");
var hooks_1 = require("@piximi/hooks");
exports.SaveMenuList = function(props) {
  var anchorEl = props.anchorEl,
    onClose = props.onClose,
    open = props.open;
  var anchorPosition = {
    top: open ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: open ? anchorEl.getBoundingClientRect().left + 14 : 0
  };
  var _a = hooks_1.useDialog(),
    openedSaveClassifierDialog = _a.openedDialog,
    openSaveClassifierDialog = _a.openDialog,
    closeSaveClassifierDialog = _a.closeDialog;
  var onSaveClassifierClick = function() {
    openSaveClassifierDialog();
    onClose();
  };
  var _b = hooks_1.useDialog(),
    openedSaveAnnotationsAndPredictionsDialog = _b.openedDialog,
    openSaveAnnotationsAndPredictionsDialog = _b.openDialog,
    closeSaveAnnotationsAndPredictionsDialog = _b.closeDialog;
  var onSaveAnnotationsAndPredictionsClick = function() {
    openSaveAnnotationsAndPredictionsDialog();
    onClose();
  };
  var _c = hooks_1.useDialog(),
    openedSaveWeightsDialog = _c.openedDialog,
    openSaveWeightsDialog = _c.openDialog,
    closeSaveWeightsDialog = _c.closeDialog;
  var onSaveWeightsClick = function() {
    openSaveWeightsDialog();
    onClose();
  };
  return (
    // @ts-ignore
    React.createElement(
      React.Fragment,
      null,
      "// @ts-ignore",
      React.createElement(
        MaterialUI.Popover,
        {
          anchorPosition: anchorPosition,
          anchorReference: "anchorPosition",
          onClose: onClose,
          open: open
        },
        "// @ts-ignore",
        React.createElement(
          MaterialUI.Paper,
          null,
          "// @ts-ignore",
          React.createElement(
            MaterialUI.MenuList,
            {dense: true},
            React.createElement(
              MaterialUI.MenuItem,
              {onClick: onSaveClassifierClick},
              "// @ts-ignore",
              React.createElement(MaterialUI.ListItemText, {
                primary: "Save classifier"
              })
            ),
            React.createElement(MaterialUI.Divider, null),
            React.createElement(
              MaterialUI.MenuItem,
              {onClick: onSaveAnnotationsAndPredictionsClick},
              "// @ts-ignore",
              React.createElement(MaterialUI.ListItemText, {
                primary: "Save annotations and predictions"
              })
            ),
            React.createElement(
              MaterialUI.MenuItem,
              {onClick: onSaveWeightsClick},
              "// @ts-ignore",
              React.createElement(MaterialUI.ListItemText, {
                primary: "Save weights"
              })
            )
          )
        )
      ),
      React.createElement(
        ConnectedSaveClassifierDialog_1.ConnectedSaveClassifierDialog,
        {open: openedSaveClassifierDialog, onClose: closeSaveClassifierDialog}
      ),
      React.createElement(
        SaveAnnotationsAndPredictionsDialog_1.SaveAnnotationsAndPredictionsDialog,
        {
          open: openedSaveAnnotationsAndPredictionsDialog,
          onClose: closeSaveAnnotationsAndPredictionsDialog
        }
      ),
      React.createElement(SaveWeightsDialog_1.SaveWeightsDialog, {
        open: openedSaveWeightsDialog,
        onClose: closeSaveWeightsDialog
      })
    )
  );
};
