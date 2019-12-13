"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var DeleteCategoryDialog_1 = require("./DeleteCategoryDialog");
var store_1 = require("@piximi/store");
var mapStateToProps = function(state) {
  return {
    images: state.classifier.images
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    deleteCategory: function(identifier) {
      var payload = {
        identifier: identifier
      };
      var action = store_1.deleteCategoryAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedDeleteCategoryDialog = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategoryDialog_1.DeleteCategoryDialog);
