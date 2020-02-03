import * as React from "react";
import {styles} from "./NavigationDrawerAppBar.css";
import classNames from "classnames";
import {makeStyles} from "@material-ui/styles";
import {AppBar, Toolbar} from "@material-ui/core";

const useStyles = makeStyles(styles);

export const NavigationDrawerAppBar = () => {
  const classes = useStyles({});

  return (
    <AppBar
      className={classNames(
        classes.appBar,
        classes["box-shadow-none"],
        classes["background-transparent"]
      )}
      color="default"
    >
      <Toolbar />
    </AppBar>
  );
};
