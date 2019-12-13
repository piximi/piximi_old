"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var ChangeCategoryVisibilityMenuItem_1 = require("./ChangeCategoryVisibilityMenuItem");
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
exports.ConnectedChangeCategoryVisibilityMenuItem = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeCategoryVisibilityMenuItem_1.ChangeCategoryVisibilityMenuItem);
