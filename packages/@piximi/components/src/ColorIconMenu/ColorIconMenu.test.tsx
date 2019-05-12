import ReactDOM from "react-dom";
import ColorIconMenu from "./ColorIconMenu";
import * as React from "react";

it('renders without crashing', () => {
  const color = '';

  const onColorChange = () => {};

  const e = (
    <ColorIconMenu color={color} onColorChange={onColorChange}/>
  );

  ReactDOM.render(e, document.createElement('div'));
});
