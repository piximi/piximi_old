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
var components_1 = require("@piximi/components");
var core_1 = require("@material-ui/core");
var react_i18next_1 = require("react-i18next");
var React = __importStar(require("react"));
exports.NewClassifierDialog = function(props) {
  var openClassifier = props.openClassifier,
    openedDialog = props.openedDialog,
    closeDialog = props.closeDialog;
  var translation = react_i18next_1.useTranslation().t;
  var _a = React.useState(translation("Untitled classifier")),
    name = _a[0],
    setName = _a[1];
  var onCreateClassifierClick = function() {
    openClassifier(name);
    closeDialog();
  };
  var onNameChange = function(event) {
    setName(event.target.value);
  };
  return React.createElement(
    components_1.AlertDialog,
    {open: openedDialog, onClose: closeDialog},
    React.createElement(components_1.AlertDialogTitle, {
      title: "Create new classifier"
    }),
    React.createElement(
      components_1.AlertDialogContent,
      null,
      "// @ts-ignore",
      React.createElement(core_1.TextField, {
        autoFocus: true,
        fullWidth: true,
        id: "name",
        label: "Name",
        margin: "dense",
        onChange: onNameChange,
        placeholder: translation("Untitled classifier"),
        type: "text"
      })
    ),
    React.createElement(components_1.AlertDialogActions, {
      acceptanceTitle: "Create",
      cancellationTitle: "Cancel",
      onAcceptance: onCreateClassifierClick,
      onCancellation: closeDialog
    })
  );
};
