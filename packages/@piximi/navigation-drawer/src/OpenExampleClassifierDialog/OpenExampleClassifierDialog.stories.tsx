import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedOpenExampleClassifierDialog } from './ConnectedOpenExampleClassifierDialog';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const closeMenu = () => {};

const onClose = () => {};

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

storiesOf('OpenExampleClassifierDialog', module).add('example', () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedOpenExampleClassifierDialog
        closeMenu={closeMenu}
        onClose={onClose}
        open
      />
    </ThemeProvider>
  </Provider>
));
