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
var core_1 = require("@material-ui/core");
var Label_1 = __importDefault(require("@material-ui/icons/Label"));
var LabelOutlined_1 = __importDefault(
  require("@material-ui/icons/LabelOutlined")
);
var MoreHoriz_1 = __importDefault(require("@material-ui/icons/MoreHoriz"));
var StyledCategory_1 = __importDefault(require("./StyledCategory"));
var CategoryListItem_css_1 = require("./CategoryListItem.css");
var styles_1 = require("@material-ui/styles");
var hooks_1 = require("@piximi/hooks");
var ConnectedCategoryDropTarget_1 = require("../../CategoryDropTarget/ConnectedCategoryDropTarget");
var CategoryListItemMenuList_1 = require("../CategoryListItemMenuList");
var useStyles = styles_1.makeStyles(CategoryListItem_css_1.styles);
var VisibleIcon = function(props) {
  var color = props.color,
    visible = props.visible;
  if (visible) {
    return React.createElement(Label_1["default"], {style: {color: color}});
  } else {
    return React.createElement(LabelOutlined_1["default"], {
      style: {color: color}
    });
  }
};
exports.CategoryListItem = function(props) {
  var categories = props.categories,
    category = props.category,
    toggleVisibility = props.toggleVisibility;
  var _a = hooks_1.useMenu(),
    anchorEl = _a.anchorEl,
    openedMenu = _a.openedMenu,
    openMenu = _a.openMenu,
    closeMenu = _a.closeMenu;
  var _b = React.useState(),
    animateOnDrop = _b[0],
    setAnimateOnDrop = _b[1];
  var onToggleVisibilityClick = function() {
    toggleVisibility(category.identifier);
  };
  var className =
    animateOnDrop !== null
      ? animateOnDrop
        ? "onDropPulse"
        : "onDropPulse2"
      : "";
  var onDrop = function() {
    setAnimateOnDrop(!animateOnDrop);
  };
  var listItemClasses = {
    root: ""
  };
  return React.createElement(
    ConnectedCategoryDropTarget_1.ConnectedCategoryDropTarget,
    {category: category},
    React.createElement(
      StyledCategory_1["default"],
      {
        color: category.visualization.color,
        onDrop: onDrop,
        className: className
      },
      React.createElement(
        core_1.ListItem,
        {classes: listItemClasses, dense: true, style: {cursor: "pointer"}},
        "// @ts-ignore",
        React.createElement(
          core_1.ListItemIcon,
          {onClick: onToggleVisibilityClick},
          React.createElement(VisibleIcon, {
            color: category.visualization.color,
            visible: category.visualization.visible
          })
        ),
        // @ts-ignore
        "// @ts-ignore",
        React.createElement(core_1.ListItemText, {
          primary: category.description
        }),
        // @ts-ignore
        "// @ts-ignore",
        React.createElement(
          core_1.ListItemSecondaryAction,
          null,
          React.createElement(
            core_1.IconButton,
            {onClick: openMenu},
            React.createElement(MoreHoriz_1["default"], null)
          )
        )
      )
    ),
    React.createElement(CategoryListItemMenuList_1.CategoryListItemMenuList, {
      anchorEl: anchorEl,
      categories: categories,
      category: category,
      closeMenu: closeMenu,
      openedMenu: openedMenu
    })
  );
};
