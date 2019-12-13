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
var core_1 = require("@material-ui/core");
var hooks_1 = require("@piximi/hooks");
var ConnectedEditCategoryDialog_1 = require("../../../../EditCategoryDialog/ConnectedEditCategoryDialog");
var ConnectedDeleteCategoryDialog_1 = require("../../../../DeleteCategoryDialog/ConnectedDeleteCategoryDialog");
var ConnectedHideOtherCategoriesMenuItem_1 = require("../../../../HideOtherCategoriesMenuItem/ConnectedHideOtherCategoriesMenuItem");
var ConnectedChangeCategoryVisibilityMenuItem_1 = require("../../../../ChangeCategoryVisibilityMenuItem/ConnectedChangeCategoryVisibilityMenuItem");
exports.CategoryListItemMenuList = function(props) {
  var anchorEl = props.anchorEl,
    category = props.category,
    closeMenu = props.closeMenu,
    openedMenu = props.openedMenu;
  var _a = hooks_1.useDialog(),
    openedEditCategoryDialog = _a.openedDialog,
    openEditCategoryDialog = _a.openDialog,
    closeEditCategoryDialog = _a.closeDialog;
  var _b = hooks_1.useDialog(),
    openedDeleteCategoryDialog = _b.openedDialog,
    openDeleteCategoryDialog = _b.openDialog,
    closeDeleteCategoryDialog = _b.closeDialog;
  var anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 10 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left : 0
  };
  var onEditCategoryClick = function() {
    openEditCategoryDialog();
    closeMenu();
  };
  var onDeleteCategoryClick = function() {
    openDeleteCategoryDialog();
    closeMenu();
  };
  var known = category.identifier !== "00000000-0000-0000-0000-000000000000";
  return (
    // @ts-ignore
    React.createElement(
      React.Fragment,
      null,
      "// @ts-ignore",
      React.createElement(
        core_1.Popover,
        {
          anchorPosition: anchorPosition,
          anchorReference: "anchorPosition",
          id: "simple-popper",
          onClose: closeMenu,
          open: openedMenu
        },
        "// @ts-ignore",
        React.createElement(
          core_1.Paper,
          null,
          "// @ts-ignore",
          React.createElement(
            core_1.MenuList,
            {dense: true},
            React.createElement(
              ConnectedHideOtherCategoriesMenuItem_1.ConnectedHideOtherCategoriesMenuItem,
              {categoryProp: category, closeMenu: closeMenu}
            ),
            React.createElement(
              ConnectedChangeCategoryVisibilityMenuItem_1.ConnectedChangeCategoryVisibilityMenuItem,
              {categoryProp: category, closeMenu: closeMenu}
            ),
            known &&
              React.createElement(
                "div",
                null,
                React.createElement(core_1.Divider, null),
                React.createElement(
                  core_1.MenuItem,
                  {onClick: onEditCategoryClick},
                  "// @ts-ignore",
                  React.createElement(core_1.ListItemText, {
                    primary: "Edit category"
                  })
                ),
                React.createElement(
                  core_1.MenuItem,
                  {onClick: onDeleteCategoryClick},
                  "// @ts-ignore",
                  React.createElement(core_1.ListItemText, {
                    primary: "Delete category"
                  })
                )
              )
          )
        )
      ),
      React.createElement(
        ConnectedEditCategoryDialog_1.ConnectedEditCategoryDialog,
        {
          category: category,
          onClose: closeEditCategoryDialog,
          open: openedEditCategoryDialog
        }
      ),
      React.createElement(
        ConnectedDeleteCategoryDialog_1.ConnectedDeleteCategoryDialog,
        {
          category: category,
          onClose: closeDeleteCategoryDialog,
          open: openedDeleteCategoryDialog
        }
      )
    )
  );
};
