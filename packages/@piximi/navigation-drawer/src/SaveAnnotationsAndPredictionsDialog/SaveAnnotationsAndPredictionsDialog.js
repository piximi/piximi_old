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
var components_1 = require("@piximi/components");
exports.SaveAnnotationsAndPredictionsDialog = function(props) {
  var open = props.open,
    onClose = props.onClose;
  var _a = React.useState(""),
    filename = _a[0],
    setFilename = _a[1];
  var onAcceptance = function() {
    onClose();
  };
  var onFilenameChange = function(event) {
    var target = event.target;
    setFilename(target.value);
  };
  return React.createElement(
    components_1.AlertDialog,
    {open: open, onClose: onClose},
    React.createElement(components_1.AlertDialogTitle, {
      title: "Save annotations and predictions"
    }),
    React.createElement(
      components_1.AlertDialogContent,
      null,
      React.createElement(components_1.FilenameTextField, {
        filename: filename,
        onFilenameChange: onFilenameChange
      })
    ),
    React.createElement(components_1.AlertDialogActions, {
      acceptanceTitle: "Save",
      cancellationTitle: "Cancel",
      onAcceptance: onAcceptance,
      onCancellation: onClose
    })
  );
};
