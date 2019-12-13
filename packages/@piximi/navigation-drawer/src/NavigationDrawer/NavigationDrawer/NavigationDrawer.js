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
var NavigationDrawer_css_1 = require("./NavigationDrawer.css");
var styles_1 = require("@material-ui/styles");
var index_1 = require("../index");
var ConnectedCategoriesList_1 = require("../CategoriesList/CategoriesList/ConnectedCategoriesList");
var core_1 = require("@material-ui/core");
var useStyles = styles_1.makeStyles(NavigationDrawer_css_1.styles);
exports.NavigationDrawer = function(props) {
  var classes = useStyles({});
  var toggled = props.toggled,
    toggle = props.toggle;
  return (
    // @ts-ignore
    React.createElement(
      core_1.Drawer,
      {
        anchor: "left",
        classes: {paper: classes.drawerPaper},
        open: toggled,
        variant: "persistent"
      },
      "// @ts-ignore",
      React.createElement(core_1.Box, {
        style: {paddingTop: 60},
        className: classes.toolbar,
        display: "flex",
        justifyContent: "flex-end",
        px: 8
      }),
      React.createElement(index_1.NavigationDrawerAppBar, {
        toggle: toggle,
        toggled: toggled
      }),
      React.createElement(index_1.ApplicationList, null),
      React.createElement(core_1.Divider, {component: "hr"}),
      React.createElement(
        ConnectedCategoriesList_1.ConnectedCategoriesList,
        null
      ),
      React.createElement(core_1.Divider, {component: "hr"}),
      React.createElement(index_1.ClassifierList, null),
      React.createElement(core_1.Divider, {component: "hr"}),
      React.createElement(index_1.MiscellaneousList, null)
    )
  );
};
