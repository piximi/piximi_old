"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var CategoryListItem_1 = require("./CategoryListItem");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    toggleVisibility: function(identifier) {
      var payload = {identifier: identifier};
      var action = store_1.toggleCategoryVisibilityAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedCategoryListItem = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListItem_1.CategoryListItem);
