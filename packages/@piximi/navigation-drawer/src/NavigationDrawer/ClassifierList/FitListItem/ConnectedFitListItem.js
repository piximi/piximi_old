"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var FitListItem_1 = require("./FitListItem");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};
exports.ConnectedFitListItem = react_redux_1.connect(mapStateToProps)(
  FitListItem_1.FitListItem
);
