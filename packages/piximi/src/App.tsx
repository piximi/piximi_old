import * as React from "react";
import {ConnectedGalleryDialogContainer} from "@piximi/gallery-dialog";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const App = () => {
  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      // @ts-ignore
      <ConnectedGalleryDialogContainer />
    </ThemeProvider>
  );
};

export default App;
