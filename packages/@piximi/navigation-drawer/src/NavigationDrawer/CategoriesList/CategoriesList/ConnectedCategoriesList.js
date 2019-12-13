"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var CategoriesList_1 = require("./CategoriesList");
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
    },
    updateVisibility: function(identifier, visible) {
      var payload = {identifier: identifier, visible: visible};
      var action = store_1.updateCategoryVisibilityAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedCategoriesList = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList_1.CategoriesList);
