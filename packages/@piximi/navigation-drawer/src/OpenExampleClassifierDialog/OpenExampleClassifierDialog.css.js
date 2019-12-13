"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/styles");
exports.styles = function(theme) {
  return styles_1.createStyles({
    closeButton: {
      color: theme.palette.grey[500],
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1)
    },
    dialogActions: {
      borderTop: "1px solid " + theme.palette.divider,
      margin: 0,
      padding: theme.spacing(1)
    },
    dialogContent: {
      margin: 0,
      padding: 0
    },
    dialogTitle: {
      borderBottom: "1px solid " + theme.palette.divider,
      margin: 0,
      padding: theme.spacing(2)
    }
  });
};
