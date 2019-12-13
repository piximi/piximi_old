"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var OpenClassifierMenuItem_1 = require("./OpenClassifierMenuItem");
var store_1 = require("@piximi/store");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    openClassifier: function(categories, images, name) {
      var payload = {
        categories: categories,
        images: images,
        name: name
      };
      var action = store_1.openClassifierAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedOpenClassifierMenuItem = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenClassifierMenuItem_1.OpenClassifierMenuItem);
