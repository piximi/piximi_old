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
var index_1 = require("../../../index");
var OpenClassifierMenuItem_1 = require("../OpenClassifierMenuItem");
var core_1 = require("@material-ui/core");
exports.OpenMenuList = function(props) {
  var anchorEl = props.anchorEl,
    closeMenu = props.closeMenu,
    openedMenu = props.openedMenu;
  var anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left + 14 : 0
  };
  return (
    // @ts-ignore
    React.createElement(
      core_1.Popover,
      {
        anchorPosition: anchorPosition,
        anchorReference: "anchorPosition",
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
            OpenClassifierMenuItem_1.ConnectedOpenClassifierMenuItem,
            {closeMenu: closeMenu}
          ),
          React.createElement(core_1.Divider, null),
          React.createElement(index_1.OpenExampleClassifierMenuItem, {
            closeMenu: closeMenu
          }),
          React.createElement(index_1.OpenWeightsMenuItem, {
            closeMenu: closeMenu
          })
        )
      )
    )
  );
};
