import ReactDOM from "react-dom";
import Snackbar from "./Snackbar";
import * as React from "react";

it('renders without crashing', () => {
  const closeSnackbar = () => {};

  const message = '';

  const openedSnackbar = true;

  const e = (
    <Snackbar
      closeSnackbar={closeSnackbar}
      message={message}
      openedSnackbar={openedSnackbar}
    />
  );

  ReactDOM.render(e, document.createElement('div'));
});
