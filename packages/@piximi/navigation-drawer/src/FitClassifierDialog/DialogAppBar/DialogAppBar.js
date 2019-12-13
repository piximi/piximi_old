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
var icons_1 = require("@material-ui/icons");
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("@material-ui/core");
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    button: {},
    grow: {
      flexGrow: 1
    },
    appBar: {
      position: "relative",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
    },
    appBarShift: {},
    appBarShiftLeft: {}
  });
});
exports.DialogAppBar = function(props) {
  var _a;
  var onStopTrainingChange = props.onStopTrainingChange,
    closeDialog = props.closeDialog,
    fit = props.fit,
    openedDrawer = props.openedDrawer;
  var classes = useStyles({});
  return React.createElement(
    core_1.AppBar,
    {
      className: classnames_1["default"](
        classes.appBar,
        ((_a = {}),
        (_a[classes.appBarShift] = openedDrawer),
        (_a[classes.appBarShiftLeft] = openedDrawer),
        _a)
      )
    },
    "// @ts-ignore",
    React.createElement(
      core_1.Toolbar,
      null,
      "// @ts-ignore",
      React.createElement(
        core_1.Tooltip,
        {title: "Close Dialog", placement: "bottom"},
        React.createElement(
          core_1.IconButton,
          {
            edge: "start",
            color: "primary",
            onClick: closeDialog,
            "aria-label": "Close",
            href: ""
          },
          React.createElement(icons_1.ArrowBack, null)
        )
      ),
      React.createElement("div", {className: classes.grow}),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.Tooltip,
        {title: "Fit the model", placement: "bottom"},
        React.createElement(
          core_1.IconButton,
          {className: classes.button, onClick: fit, href: ""},
          React.createElement(icons_1.PlayCircleOutline, null)
        )
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.Tooltip,
        {title: "Stop fitting the model", placement: "bottom"},
        React.createElement(
          core_1.IconButton,
          {className: classes.button, onClick: onStopTrainingChange, href: ""},
          React.createElement(icons_1.Stop, null)
        )
      ),
      React.createElement(
        core_1.IconButton,
        {
          disabled: true,
          className: classes.button,
          onClick: closeDialog,
          href: ""
        },
        React.createElement(icons_1.ReplayRounded, null)
      )
    )
  );
};
