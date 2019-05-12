import ReactDOM from "react-dom";
import DialogTitle from "./DialogTitle";
import * as React from "react";

it('renders without crashing', () => {
  const title = '';

  const e = (
    <DialogTitle title={title}/>
  );

  ReactDOM.render(e, document.createElement('div'));
});
