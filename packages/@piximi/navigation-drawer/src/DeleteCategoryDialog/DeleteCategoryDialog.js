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
var core_1 = require("@material-ui/core");
var react_i18next_1 = require("react-i18next");
exports.DeleteCategoryDialog = function(props) {
  var category = props.category,
    deleteCategory = props.deleteCategory,
    open = props.open,
    onClose = props.onClose;
  var onDeleteCategoryClick = function() {
    deleteCategory(category.identifier);
  };
  var dialogTitle = "Delete " + category.description + "?";
  var dialogContentText =
    "Images categorized as " + category.description + " won\u2019t be deleted.";
  var translation = react_i18next_1.useTranslation().t;
  return (
    // @ts-ignore
    React.createElement(
      core_1.Dialog,
      {open: open, onClose: onClose},
      "// @ts-ignore",
      React.createElement(
        core_1.DialogTitle,
        {id: "alert-dialog-title"},
        dialogTitle
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.DialogContent,
        null,
        "// @ts-ignore",
        React.createElement(
          core_1.DialogContentText,
          {id: "alert-dialog-description"},
          dialogContentText
        )
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.DialogActions,
        null,
        React.createElement(
          core_1.Button,
          {onClick: onClose, color: "primary"},
          translation("Cancel")
        ),
        React.createElement(
          core_1.Button,
          {onClick: onDeleteCategoryClick, color: "primary"},
          translation("Yes")
        )
      )
    )
  );
};
