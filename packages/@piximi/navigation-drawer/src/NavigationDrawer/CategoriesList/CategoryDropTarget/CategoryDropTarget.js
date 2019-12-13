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
var react_dnd_1 = require("react-dnd");
var React = __importStar(require("react"));
exports.CategoryDropTarget = function(props) {
  var category = props.category,
    children = props.children,
    updateImagesCategory = props.updateImagesCategory;
  var drop = React.useCallback(
    function(droppedItem) {
      updateImagesCategory(droppedItem.selectedItems, category.identifier);
    },
    [category.identifier, updateImagesCategory]
  );
  var spec = {
    accept: "image",
    drop: drop
  };
  var _a = react_dnd_1.useDrop(spec),
    dropTarget = _a[1];
  return React.createElement("div", {ref: dropTarget}, children);
};
