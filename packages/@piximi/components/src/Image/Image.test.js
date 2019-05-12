import ReactDOM from "react-dom";
import Image from "./Image";
import React from "react";

it('renders without crashing', () => {
  const e = (
    <Image/>
  );

  ReactDOM.render(e, document.createElement('div'));
});
