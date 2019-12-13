"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var HideOtherCategoriesMenuItem_1 = require("./HideOtherCategoriesMenuItem");
var mapStateToProps = function(state) {
  return {
    classifier: state.classifier
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    makeCategoryInvisible: function(categoryIdentifier, visibility) {
      var payload = {identifier: categoryIdentifier, visible: visibility};
      var action = store_1.updateCategoryVisibilityAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedHideOtherCategoriesMenuItem = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(HideOtherCategoriesMenuItem_1.HideOtherCategoriesMenuItem);
