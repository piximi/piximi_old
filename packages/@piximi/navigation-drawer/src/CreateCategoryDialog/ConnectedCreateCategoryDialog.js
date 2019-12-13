"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var uuid_1 = __importDefault(require("uuid"));
var CreateCategoryDialog_1 = require("./CreateCategoryDialog");
var index = 0;
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    createCategory: function(color, description) {
      var category = {
        description: description,
        identifier: uuid_1["default"](),
        index: index++,
        visualization: {
          color: color,
          visible: true
        }
      };
      var payload = {category: category};
      var action = store_1.createCategoryAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedCreateCategoryDialog = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryDialog_1.CreateCategoryDialog);
