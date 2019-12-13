"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var PredictListItem_1 = require("./PredictListItem");
var store_1 = require("@piximi/store");
var mapStateToProps = function(state) {
  return {
    categories: state.classifier.categories,
    classifier: state.classifier,
    images: state.classifier.images
  };
};
var mapDispatchToProps = function(dispatch) {
  return {
    createImageScore: function(identifiers, scores) {
      var payload = {identifiers: identifiers, scores: scores};
      var action = store_1.createImagesScoreAction(payload);
      dispatch(action);
    }
  };
};
exports.ConnectedPredictListItem = react_redux_1.connect(
  mapStateToProps,
  mapDispatchToProps
)(PredictListItem_1.PredictListItem);
