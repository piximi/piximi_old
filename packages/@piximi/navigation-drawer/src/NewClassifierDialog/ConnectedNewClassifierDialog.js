"use strict";
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var uuid = __importStar(require("uuid"));
var NewClassifierDialog_1 = require("./NewClassifierDialog");
var mapStateToProps = function(state) {
  return state.classifier;
};
var mapDispatchToProps = function(dispatch) {
  return {
    openClassifier: function(name) {
      var classifier = {
        identifier: uuid.v4(),
        name: name
      };
      var action = store_1.createClassifierAction(classifier);
      dispatch(action);
    }
  };
};
exports.ConnectedNewClassifierDialog = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(NewClassifierDialog_1.NewClassifierDialog);
