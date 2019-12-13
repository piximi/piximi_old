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
exports.OpenWeightsMenuItem = function(props) {
  var closeMenu = props.closeMenu;
  var onChange = function() {};
  var onClick = function() {
    closeMenu();
  };
  return (
    // @ts-ignore
    React.createElement(
      React.Fragment,
      null,
      React.createElement("input", {
        accept: "*",
        id: "open-weights",
        name: "file",
        onChange: onChange,
        style: {display: "none"},
        type: "file"
      }),
      React.createElement(
        "label",
        {htmlFor: "open-weights"},
        React.createElement(
          core_1.MenuItem,
          {onClick: onClick},
          "// @ts-ignore",
          React.createElement(core_1.ListItemText, {primary: "Open weights"})
        )
      )
    )
  );
};
