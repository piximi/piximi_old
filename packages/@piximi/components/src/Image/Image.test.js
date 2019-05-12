import ReactDOM from "react-dom";
import React from "react";

import Image from "./Image";

it('Image', () => {
  const e = (
    <Image/>
  );

  ReactDOM.render(e, document.createElement('div'));
});
