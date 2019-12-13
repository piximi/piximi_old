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
exports.ChangeCategoryVisibilityMenuItem = function(props) {
  var categoryProp = props.categoryProp,
    closeMenu = props.closeMenu,
    makeCategoryInvisible = props.makeCategoryInvisible;
  var categoryIsVisible = categoryProp.visualization.visible;
  var listItemText = categoryIsVisible ? "Hide category" : "Show category";
  var onClick = function() {
    closeMenu();
    makeCategoryInvisible(categoryProp.identifier, !categoryIsVisible);
  };
  return React.createElement(
    MaterialUI.MenuItem,
    {onClick: onClick},
    "// @ts-ignore",
    React.createElement(MaterialUI.ListItemText, {primary: listItemText})
  );
};
