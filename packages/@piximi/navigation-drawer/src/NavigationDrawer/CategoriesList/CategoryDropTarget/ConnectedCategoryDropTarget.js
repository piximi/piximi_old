"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var CategoryDropTarget_1 = require("./CategoryDropTarget");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    updateImagesCategory: function(identifiers, categoryIdentifier) {
      var payload = {
        categoryIdentifier: categoryIdentifier,
        identifiers: identifiers
      };
      var action = store_1.updateImagesCategoryAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedCategoryDropTarget = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDropTarget_1.CategoryDropTarget);
