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
var axios_1 = __importDefault(require("axios"));
var OpenExampleClassifierDialog_css_1 = require("./OpenExampleClassifierDialog.css");
var core_1 = require("@material-ui/core");
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var styles_1 = require("@material-ui/styles");
var react_i18next_1 = require("react-i18next");
// @ts-ignore
var test;
var NavigationDrawer_1 = require("../NavigationDrawer");
var useStyles = styles_1.makeStyles(OpenExampleClassifierDialog_css_1.styles);
exports.OpenExampleClassifierDialog = function(props) {
  var classes = useStyles({});
  var translation = react_i18next_1.useTranslation().t;
  var openClassifier = props.openClassifier,
    open = props.open,
    onClose = props.onClose,
    closeMenu = props.closeMenu;
  var openExampleClassifier = function(name) {
    closeMenu();
    return axios_1["default"]
      .get("https://storage.piximi.app/examples/" + name + ".piximi")
      .then(function(result) {
        openClassifier(result.data.categories, result.data.images, name);
      })
      ["catch"](function(error) {
        alert(error);
      });
  };
  var closeMenueAndDialog = function() {
    onClose();
    closeMenu();
  };
  return (
    // @ts-ignore
    React.createElement(
      core_1.Dialog,
      {fullWidth: true, maxWidth: "sm", open: open},
      "// @ts-ignore",
      React.createElement(
        core_1.DialogTitle,
        {disableTypography: true, className: classes.dialogTitle},
        "// @ts-ignore",
        React.createElement(
          core_1.Typography,
          {variant: "h6"},
          translation("Open example classifier")
        ),
        React.createElement(
          core_1.IconButton,
          {
            "aria-label": "Close",
            className: classes.closeButton,
            onClick: closeMenueAndDialog
          },
          React.createElement(Close_1["default"], null)
        )
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(
        core_1.DialogContent,
        {classes: {root: classes.dialogContent}},
        React.createElement(
          core_1.List,
          null,
          React.createElement(
            NavigationDrawer_1.OpenExampleClassifierListItem,
            {
              src: "https://storage.piximi.app/examples/MNIST.png",
              primary: "MNIST",
              secondary: "",
              onClick: function() {
                onClose();
                openExampleClassifier("mnist");
              }
            }
          )
        )
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(core_1.DialogActions, null)
    )
  );
};
