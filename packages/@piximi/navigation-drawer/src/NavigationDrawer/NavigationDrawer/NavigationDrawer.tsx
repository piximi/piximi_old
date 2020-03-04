import * as React from "react";
import {styles} from "./NavigationDrawer.css";
import {makeStyles} from "@material-ui/styles";
import {
  ApplicationList,
  ClassifierList,
  NavigationDrawerAppBar,
  MiscellaneousList
} from "../index";
import {ConnectedCategoriesList} from "../CategoriesList/CategoriesList/ConnectedCategoriesList";
import {
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import List from "@material-ui/core/List";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

const useStyles = makeStyles(styles);

type DrawerProps = {
  toggled: boolean;
  toggle: () => void;
};

export const NavigationDrawer = (props: DrawerProps) => {
  const classes = useStyles({});

  const {toggled, toggle} = props;

  return (
    <Drawer
      anchor="left"
      className={classes.drawer}
      classes={{paper: classes.drawerPaper}}
      open={toggled}
      variant="persistent"
    >
      <Box
        style={{paddingTop: 60}}
        className={classes.toolbar}
        display="flex"
        justifyContent="flex-end"
        px={8}
      />

      <NavigationDrawerAppBar />

      <ApplicationList />

      <Divider component={"hr"} />

      <List>
        <ListItem button dense>
          <ListItemIcon>
            <PhotoLibraryIcon />
          </ListItemIcon>

          <ListItemText primary="Images" />
        </ListItem>
      </List>

      <Divider component={"hr"} />

      <ConnectedCategoriesList />

      <Divider component={"hr"} />

      <ClassifierList />

      <Divider component={"hr"} />

      <MiscellaneousList />
    </Drawer>
  );
};
