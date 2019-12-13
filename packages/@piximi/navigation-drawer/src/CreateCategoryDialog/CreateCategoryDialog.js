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
var React = __importStar(require("react"));
var components_1 = require("@piximi/components");
exports.colors = [
  "rgb(193,	 53,	19)",
  "rgb(248,	 52,  35)",
  "rgb(251,	  0,	66)",
  "rgb(159,	 40,	20)",
  "rgb(218,	 22,	69)",
  "rgb(251,	 31,	94)",
  "rgb( 99,	123,	38)",
  "rgb(100,	145,  65)",
  "rgb( 34,	227, 219)",
  "rgb( 34,	107, 141)",
  "rgb( 40,	209,	17)",
  "rgb( 44,	208,	83)",
  "rgb( 36,	 98, 121)",
  "rgb( 16, 143, 200)",
  "rgb( 44,  80, 191)",
  "rgb( 19,	 55, 160)",
  "rgb( 54, 133, 213)",
  "rgb( 12, 103, 254)" // b, 10s
];
exports.CreateCategoryDialog = function(props) {
  var createCategory = props.createCategory,
    open = props.open,
    onClose = props.onClose;
  var _a = React.useState("#00e676"),
    color = _a[0],
    setColor = _a[1];
  var _b = React.useState(""),
    description = _b[0],
    setDescription = _b[1];
  var onAcceptance = function() {
    createCategory(color, description);
    onClose();
  };
  var onColorChange = function(color) {
    setColor(color.hex);
  };
  var onDescriptionChange = function(event) {
    var target = event.target;
    setDescription(target.value);
  };
  return React.createElement(
    components_1.AlertDialog,
    {open: open, onClose: onClose},
    React.createElement(components_1.AlertDialogTitle, {
      title: "Create a new category"
    }),
    React.createElement(
      components_1.AlertDialogContent,
      null,
      React.createElement(components_1.ColorIconButton, {
        color: color,
        colors: exports.colors,
        onColorChange: onColorChange
      }),
      React.createElement(components_1.CategoryDescriptionTextField, {
        description: description,
        onDescriptionChange: onDescriptionChange
      })
    ),
    React.createElement(components_1.AlertDialogActions, {
      acceptanceTitle: "Create",
      cancellationTitle: "Cancel",
      onAcceptance: onAcceptance,
      onCancellation: onClose
    })
  );
};
