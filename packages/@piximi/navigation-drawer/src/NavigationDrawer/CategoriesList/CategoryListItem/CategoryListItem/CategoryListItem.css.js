"use strict";
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", {value: raw});
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var color_1 = __importDefault(require("color"));
var styles_1 = require("@material-ui/styles");
exports.styles = function() {
  return styles_1.createStyles({
    icon: {
      color: "rgba(0,0,0,0.50)",
      cursor: "pointer",
      "&:hover": {
        color: "rgba(0,0,0,0.87)"
      }
    },
    isOver: {
      background: "rgba(0, 0, 0, 0.20)"
    }
  });
};
exports.pulseAnimation = function(color) {
  return styled_components_1.keyframes(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        [
          "\n  0% {\n    box-shadow: 0px 0px 0px 0px ",
          ";\n  }\n  10% {\n    background-color: ",
          ";\n  }\n  70% {\n    background-color: ",
          ";\n    box-shadow: 0px 0px 15px 15px ",
          ";\n  }\n  100% {\n    box-shadow: 0px 0px 0px 0px ",
          ";\n  }\n"
        ],
        [
          "\n  0% {\n    box-shadow: 0px 0px 0px 0px ",
          ";\n  }\n  10% {\n    background-color: ",
          ";\n  }\n  70% {\n    background-color: ",
          ";\n    box-shadow: 0px 0px 15px 15px ",
          ";\n  }\n  100% {\n    box-shadow: 0px 0px 0px 0px ",
          ";\n  }\n"
        ]
      )),
    color_1["default"](color)
      .alpha(0.3)
      .string(),
    color_1["default"](color)
      .alpha(0.3)
      .string(),
    color_1["default"](color)
      .alpha(0)
      .string(),
    color_1["default"](color)
      .alpha(0.0)
      .string(),
    color_1["default"](color)
      .alpha(0.0)
      .string()
  );
};
exports.pulseAnimation2 = function(color) {
  return styled_components_1.keyframes(
    templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
        [
          "\n  0% {\n    box-shadow: 0px 0px 0px 0px ",
          ";\n  }\n  10% {\n    background-color: ",
          ";\n  }\n  70% {\n    background-color: ",
          ";\n    box-shadow: 0px 0px 16px 16px ",
          ";\n  }\n  100% {\n    box-shadow: 0px 0px 0px 0px ",
          ";\n  }\n"
        ],
        [
          "\n  0% {\n    box-shadow: 0px 0px 0px 0px ",
          ";\n  }\n  10% {\n    background-color: ",
          ";\n  }\n  70% {\n    background-color: ",
          ";\n    box-shadow: 0px 0px 16px 16px ",
          ";\n  }\n  100% {\n    box-shadow: 0px 0px 0px 0px ",
          ";\n  }\n"
        ]
      )),
    color_1["default"](color)
      .alpha(0.3)
      .string(),
    color_1["default"](color)
      .alpha(0.3)
      .string(),
    color_1["default"](color)
      .alpha(0)
      .string(),
    color_1["default"](color)
      .alpha(0.0)
      .string(),
    color_1["default"](color)
      .alpha(0.0)
      .string()
  );
};
var templateObject_1, templateObject_2;
