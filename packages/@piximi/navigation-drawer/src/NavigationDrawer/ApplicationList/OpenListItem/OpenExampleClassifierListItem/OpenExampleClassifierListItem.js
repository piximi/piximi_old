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
var core_1 = require("@material-ui/core");
var react_i18next_1 = require("react-i18next");
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
exports.OpenExampleClassifierListItem = function(props) {
  var translation = react_i18next_1.useTranslation().t;
  var onClick = props.onClick,
    primary = props.primary,
    secondary = props.secondary,
    src = props.src;
  return React.createElement(
    core_1.ListItem,
    {button: true, onClick: onClick},
    "// @ts-ignore",
    React.createElement(
      core_1.ListItemAvatar,
      null,
      React.createElement(
        core_1.Avatar,
        {src: src},
        React.createElement(Add_1["default"], null)
      )
    ),
    // @ts-ignore
    "// @ts-ignore",
    React.createElement(core_1.ListItemText, {
      primary: translation(primary),
      secondary: translation(secondary)
    })
  );
};
