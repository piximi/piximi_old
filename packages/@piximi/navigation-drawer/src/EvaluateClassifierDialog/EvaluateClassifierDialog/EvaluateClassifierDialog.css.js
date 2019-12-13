"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/styles");
var drawerWidth = 280;
exports.styles = function(theme) {
  return styles_1.createStyles({
    content: {
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    contentLeft: {
      marginLeft: 0
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    contentShiftLeft: {
      marginLeft: drawerWidth
    },
    paper: {
      zIndex: 1203
    }
  });
};
