"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var SaveListItem_1 = require("./SaveListItem");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};
exports.ConnectedSaveListItem = react_redux_1.connect(mapStateToProps)(
  SaveListItem_1.SaveListItem
);
