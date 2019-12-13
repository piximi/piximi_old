"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var SaveClassifierDialog_1 = require("./SaveClassifierDialog");
var mapStateToProps = function(state) {
  return {
    classifier: state.classifier
  };
};
exports.ConnectedSaveClassifierDialog = react_redux_1.connect(mapStateToProps)(
  SaveClassifierDialog_1.SaveClassifierDialog
);
