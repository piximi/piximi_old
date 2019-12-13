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
exports.HideOtherCategoriesMenuItem = function(props) {
  var classifier = props.classifier,
    categoryProp = props.categoryProp,
    closeMenu = props.closeMenu,
    makeCategoryInvisible = props.makeCategoryInvisible;
  // check if 'categoryProp' is the only visible category
  var isOnlyVisibleCategory =
    classifier.categories
      .filter(function(category) {
        return category.identifier !== categoryProp.identifier;
      })
      .filter(function(category) {
        return category.visualization.visible;
      }).length === 0;
  var listItemText = isOnlyVisibleCategory
    ? "Show other categories"
    : "Hide other categories";
  var onClick = function() {
    closeMenu();
    classifier.categories.forEach(function(category) {
      if (category.identifier !== categoryProp.identifier) {
        makeCategoryInvisible(category.identifier, isOnlyVisibleCategory);
      }
    });
  };
  return React.createElement(
    MaterialUI.MenuItem,
    {onClick: onClick},
    "// @ts-ignore",
    React.createElement(MaterialUI.ListItemText, {primary: listItemText})
  );
};
