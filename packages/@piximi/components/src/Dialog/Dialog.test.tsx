import ReactDOM from "react-dom";
import Dialog from "./Dialog";
import * as React from "react";

it('renders without crashing', () => {
  const open = true;

  const onClose = () => {};

  const e = (
    <Dialog open={open} onClose={onClose}>
      <div>

      </div>
    </Dialog>
  );

  ReactDOM.render(e, document.createElement('div'));
});
