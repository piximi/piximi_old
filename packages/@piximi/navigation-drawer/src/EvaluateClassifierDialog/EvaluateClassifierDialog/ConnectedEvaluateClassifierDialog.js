"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var store_1 = require("@piximi/store");
var EvaluateClassifierDialog_1 = require("./EvaluateClassifierDialog");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    setImagesPartition: function(partitions) {
      var payload = {partitions: partitions};
      var action = store_1.updateImagesPartitionAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedEvaluateClassifierDialog = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluateClassifierDialog_1.EvaluateClassifierDialog);
