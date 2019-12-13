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
var ExpandLess_1 = __importDefault(require("@material-ui/icons/ExpandLess"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var hooks_1 = require("@piximi/hooks");
var _ = __importStar(require("lodash"));
var react_i18next_1 = require("react-i18next");
var ConnectedCategoryListItem_1 = require("../CategoryListItem/CategoryListItem/ConnectedCategoryListItem");
var CreateCategoryListItem_1 = require("../CreateCategoryListItem");
exports.CategoriesList = function(props) {
  var _a = hooks_1.useCollapseList(),
    collapsedList = _a.collapsedList,
    collapseList = _a.collapseList;
  var translation = react_i18next_1.useTranslation().t;
  var categories = props.categories;
  var _b = _.partition(categories, function(category) {
      if (category.identifier === "00000000-0000-0000-0000-000000000000") {
        return category;
      }
    }),
    unknown = _b[0],
    known = _b[1];
  var sortedCategories = _.concat(_.sortBy(known, "description"), unknown);
  return React.createElement(
    core_1.List,
    {dense: true},
    React.createElement(
      core_1.ListItem,
      {button: true, onClick: collapseList},
      "// @ts-ignore",
      React.createElement(
        core_1.ListItemIcon,
        null,
        !collapsedList
          ? React.createElement(ExpandLess_1["default"], null)
          : React.createElement(ExpandMore_1["default"], null)
      ),
      // @ts-ignore
      "// @ts-ignore",
      React.createElement(core_1.ListItemText, {
        primary: translation("Categories")
      })
    ),
    // @ts-ignore
    "// @ts-ignore",
    React.createElement(
      core_1.Collapse,
      {in: !collapsedList, timeout: "auto", unmountOnExit: true},
      sortedCategories.map(function(category, index) {
        return React.createElement(
          ConnectedCategoryListItem_1.ConnectedCategoryListItem,
          {category: category, key: category.identifier, index: index}
        );
      }),
      React.createElement(CreateCategoryListItem_1.CreateCategoryListItem, null)
    )
  );
};
