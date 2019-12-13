"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var EditCategoryDialog_1 = require("./EditCategoryDialog");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    updateColor: function(identifier, color) {
      var payload = {identifier: identifier, color: color};
      var action = store_1.updateCategoryColorAction(payload);
      dispatch(action);
    },
    updateDescription: function(identifier, description) {
      var payload = {identifier: identifier, description: description};
      var action = store_1.updateCategoryDescriptionAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedEditCategoryDialog = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryDialog_1.EditCategoryDialog);
