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
var Save_1 = __importDefault(require("@material-ui/icons/Save"));
var hooks_1 = require("@piximi/hooks");
var index_1 = require("../../../index");
var core_1 = require("@material-ui/core");
exports.SaveListItem = function() {
  var _a = hooks_1.useMenu(),
    anchorEl = _a.anchorEl,
    openedMenu = _a.openedMenu,
    openMenu = _a.openMenu,
    closeMenu = _a.closeMenu;
  return (
    // @ts-ignore
    React.createElement(
      React.Fragment,
      null,
      React.createElement(
        core_1.ListItem,
        {button: true, onClick: openMenu},
        "// @ts-ignore",
        React.createElement(
          core_1.ListItemIcon,
          null,
          React.createElement(Save_1["default"], null)
        ),
        // @ts-ignore
        "// @ts-ignore",
        React.createElement(core_1.ListItemText, {primary: "Save"})
      ),
      React.createElement(index_1.SaveMenuList, {
        anchorEl: anchorEl,
        onClose: closeMenu,
        open: openedMenu
      })
    )
  );
};
