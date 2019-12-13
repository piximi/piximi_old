"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var EvaluateListItem_1 = require("./EvaluateListItem");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};
exports.ConnectedEvaluateListItem = react_redux_1.connect(mapStateToProps)(
  EvaluateListItem_1.EvaluateListItem
);
