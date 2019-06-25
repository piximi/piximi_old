import * as React from 'react';
import { styles } from './NavigationDrawer.css';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {
  BrightnessSlider,
  ChannelsList,
  ContrastSlider,
  Histogram
} from '../index';

const useStyles = makeStyles(styles);

export const NavigationDrawer = (props: any) => {
  const { image } = props;

  const classes = useStyles({});

  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      anchor="right"
      style={{ backgroundColor: '#202124' }}
      variant={'persistent'}
      open
    >
      <Histogram />

      <ChannelsList />

      <BrightnessSlider />

      <ContrastSlider />
    </Drawer>
  );
};
