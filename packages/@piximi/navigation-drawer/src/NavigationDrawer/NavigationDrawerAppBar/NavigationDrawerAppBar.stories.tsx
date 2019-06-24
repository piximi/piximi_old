import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavigationDrawerAppBar } from './NavigationDrawerAppBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const toggle = () => {};

storiesOf('NavigationDrawerAppBar', module).add('example', () => (
  <ThemeProvider theme={theme}>
    <NavigationDrawerAppBar toggle={toggle} toggled />
  </ThemeProvider>
));
