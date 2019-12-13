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
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    expansionPanel: {
      boxShadow: "none"
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    button: {
      marginRight: theme.spacing(1)
    },
    grow: {
      flexGrow: 1
    },
    form: {},
    appBar: {
      position: "relative",
      backgroundColor: "transparent",
      boxShadow: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
    },
    container: {
      // width: '100%',
      display: "flex",
      flexWrap: "wrap"
    },
    root: {
      zIndex: 1100
    },
    paper: {
      zIndex: 1100
    },
    paperFullScreen: {
      left: "280px"
    },
    menu: {
      // width: 200,
    },
    textField: {
      // marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      flexBasis: 300,
      width: "100%"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  });
});
exports.RescalingForm = function(props) {
  var lowerPercentile = props.lowerPercentile,
    closeDialog = props.closeDialog,
    upperPercentile = props.upperPercentile,
    onLowerPercentileChange = props.onLowerPercentileChange,
    onUpperPercentileChange = props.onUpperPercentileChange,
    openedDialog = props.openedDialog;
  var classes = useStyles({});
  return React.createElement(
    "form",
    {className: classes.container, noValidate: true, autoComplete: "off"},
    React.createElement(
      core_1.Grid,
      {container: true, spacing: 2},
      React.createElement(
        core_1.Grid,
        {item: true, xs: 2},
        "// @ts-ignore",
        React.createElement(core_1.TextField, {
          id: "lower-percentile",
          label: "Lower Percentile",
          className: classes.textField,
          value: lowerPercentile,
          onChange: onLowerPercentileChange,
          type: "number",
          margin: "normal",
          defaultValue: "0"
        })
      ),
      React.createElement(
        core_1.Grid,
        {item: true, xs: 2},
        "// @ts-ignore",
        React.createElement(core_1.TextField, {
          id: "upper-percentile",
          label: "Upper Percentile",
          className: classes.textField,
          value: upperPercentile,
          onChange: onUpperPercentileChange,
          margin: "normal",
          type: "number",
          defaultValue: "100"
        })
      )
    )
  );
};
