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
exports.OpenClassifierMenuItem = function(props) {
  var closeMenu = props.closeMenu,
    openClassifier = props.openClassifier;
  var onChange = function(e) {
    var reader = new FileReader();
    reader.readAsText(e.target.files[0], "UTF-8");
    reader.onload = function(e) {
      var target = e.target;
      var classifier = JSON.parse(target.result);
      openClassifier(classifier.categories, classifier.images, classifier.name);
    };
    closeMenu();
  };
  return (
    // @ts-ignore
    React.createElement(
      React.Fragment,
      null,
      React.createElement("input", {
        accept: ".piximi",
        id: "open-classifier",
        name: "file",
        onChange: onChange,
        style: {display: "none"},
        type: "file"
      }),
      React.createElement(
        "label",
        {htmlFor: "open-classifier"},
        React.createElement(
          core_1.MenuItem,
          null,
          "// @ts-ignore",
          React.createElement(core_1.ListItemText, {primary: "Open classifier"})
        )
      )
    )
  );
};
