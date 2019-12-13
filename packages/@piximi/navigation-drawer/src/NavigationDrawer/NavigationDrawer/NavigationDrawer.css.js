"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/styles");
var drawerWidth = 280;
exports.styles = function(theme) {
  return styles_1.createStyles({
    toolbar: {
      alignItems: "center",
      toolbar: theme.mixins.toolbar
    },
    drawerPaper: {
      position: "fixed",
      width: drawerWidth,
      boxShadow:
        "0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.2)"
    }
  });
};
