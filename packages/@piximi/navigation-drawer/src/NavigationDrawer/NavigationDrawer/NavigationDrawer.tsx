import * as React from 'react';
import { styles } from './NavigationDrawer.css';
import { makeStyles } from '@material-ui/styles';
import {
  ApplicationList,
  ClassifierList,
  NavigationDrawerAppBar,
  MiscellaneousList
} from '../index';
import { ConnectedCategoriesList } from '../CategoriesList/CategoriesList/ConnectedCategoriesList';
import { Box, Divider, Drawer } from '@material-ui/core';

const useStyles = makeStyles(styles);

type DrawerProps = {
  toggled: boolean;
  toggle: () => void;
};

export const NavigationDrawer = (props: DrawerProps) => {
  const classes = useStyles({});

  const { toggled, toggle } = props;

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      open={toggled}
      variant="persistent"
    >
      <Box
        className={classes.toolbar}
        display="flex"
        justifyContent="flex-end"
        px={8}
      />

      <NavigationDrawerAppBar toggle={toggle} toggled={toggled} />

      <ApplicationList />

      <Divider component={'hr'} />

      <ConnectedCategoriesList />

      <Divider component={'hr'} />

      <ClassifierList />

      <Divider component={'hr'} />

      <MiscellaneousList />
    </Drawer>
  );
};
