import * as React from "react";
import {storiesOf} from "@storybook/react";
import {ConnectedGalleryDialog} from "./ConnectedGalleryDialog";
import {ThemeProvider} from "@material-ui/styles";
import {createMuiTheme} from "@material-ui/core";
import {store} from "@piximi/store";
import {Provider} from "react-redux";
import HTML5Backend from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

storiesOf("GalleryDialog", module).add("example", () => (
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedGalleryDialog />
      </ThemeProvider>
    </Provider>
  </DndProvider>
));
