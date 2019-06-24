import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavigationDrawer } from './NavigationDrawer';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const toggle = () => {};

storiesOf('NavigationDrawer', module).add('example', () => (
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationDrawer toggle={toggle} toggled />
      </ThemeProvider>
    </Provider>
  </DndProvider>
));
