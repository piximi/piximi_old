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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
exports.__esModule = true;
var React = __importStar(require("react"));
var NavigationDrawerAppBar_css_1 = require("./NavigationDrawerAppBar.css");
var classnames_1 = __importDefault(require("classnames"));
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var styles_1 = require("@material-ui/styles");
var core_1 = require("@material-ui/core");
var useStyles = styles_1.makeStyles(NavigationDrawerAppBar_css_1.styles);
exports.NavigationDrawerAppBar = function(props) {
  var toggle = props.toggle,
    toggled = props.toggled;
  var classes = useStyles({});
  return React.createElement(
    core_1.AppBar,
    {className: classnames_1["default"](classes.appBar), color: "default"},
    "// @ts-ignore",
    React.createElement(
      core_1.Toolbar,
      {disableGutters: true},
      "// @ts-ignore",
      React.createElement(
        core_1.Tooltip,
        {title: (toggled ? "Hide " : "Show ") + "sidebar"},
        React.createElement(
          core_1.IconButton,
          {
            "aria-label": "open sidebar",
            className: classnames_1["default"](classes.menuButton),
            color: "inherit",
            onClick: toggle
          },
          React.createElement(Menu_1["default"], null)
        )
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.Typography,
        {variant: "h6", color: "inherit"},
        "Piximi"
      )
    )
  );
};
