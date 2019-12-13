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
var styled_components_1 = __importDefault(require("styled-components"));
var CategoryListItem_css_1 = require("./CategoryListItem.css");
var StyledCategory = styled_components_1["default"].div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ["\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n"],
      ["\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n"]
    )),
  function(props) {
    return props.className === "onDropPulse" && "animation:";
  },
  function(props) {
    return (
      props.className === "onDropPulse" &&
      CategoryListItem_css_1.pulseAnimation(props.color)
    );
  },
  function(props) {
    return props.className === "onDropPulse" && " 0.5s linear;";
  },
  function(props) {
    return props.className === "onDropPulse2" && "animation:";
  },
  function(props) {
    return (
      props.className === "onDropPulse2" &&
      CategoryListItem_css_1.pulseAnimation2(props.color)
    );
  },
  function(props) {
    return props.className === "onDropPulse2" && " 0.5s linear;";
  }
);
exports["default"] = StyledCategory;
var templateObject_1;
