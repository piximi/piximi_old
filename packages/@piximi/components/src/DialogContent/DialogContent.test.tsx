import ReactDOM from "react-dom";
import DialogContent from "./DialogContent";
import * as React from "react";

it('renders without crashing', () => {
  const e = (
    <DialogContent>
      <div>

      </div>
    </DialogContent>
  );

  ReactDOM.render(e, document.createElement('div'));
});
