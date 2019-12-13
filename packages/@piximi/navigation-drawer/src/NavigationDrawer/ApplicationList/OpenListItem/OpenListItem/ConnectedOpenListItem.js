"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var OpenListItem_1 = require("./OpenListItem");
var mapStateToProps = function(state) {
  return {
    images: state.classifier.images,
    categories: state.classifier.categories
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    updateStore: function(data) {
      for (var _i = 0, _a = data.images; _i < _a.length; _i++) {
        var image = _a[_i];
        var payload = {
          image: image
        };
        var action = store_1.createImageAction(payload);
        dispatch(action);
      }
      for (var _b = 0, _c = data.categories; _b < _c.length; _b++) {
        var category = _c[_b];
        var payload = {
          category: category
        };
        var action = store_1.createCategoryAction(payload);
        dispatch(action);
      }
    }
  };
};
exports.ConnectedOpenListItem = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenListItem_1.OpenListItem);
