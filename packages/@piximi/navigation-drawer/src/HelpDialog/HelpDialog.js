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
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button/Button"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog/Dialog"));
var DialogActions_1 = __importDefault(
  require("@material-ui/core/DialogActions/DialogActions")
);
var DialogContent_1 = __importDefault(
  require("@material-ui/core/DialogContent/DialogContent")
);
var DialogContentText_1 = __importDefault(
  require("@material-ui/core/DialogContentText/DialogContentText")
);
var react_i18next_1 = require("react-i18next");
exports.HelpDialog = function(props) {
  var onClose = props.onClose,
    open = props.open;
  var translation = react_i18next_1.useTranslation().t;
  return (
    // @ts-ignore
    React.createElement(
      Dialog_1["default"],
      {open: open, onClose: onClose},
      "// @ts-ignore",
      React.createElement(
        DialogContent_1["default"],
        null,
        "// @ts-ignore",
        React.createElement(DialogContentText_1["default"], null, "\u00A0")
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        DialogActions_1["default"],
        null,
        React.createElement(
          Button_1["default"],
          {onClick: onClose, color: "primary"},
          translation("Cancel")
        ),
        React.createElement(
          Button_1["default"],
          {onClick: onClose, color: "primary"},
          translation("OK")
        )
      )
    )
  );
};
