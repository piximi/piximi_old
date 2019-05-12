import ReactDOM from "react-dom";
import ColorIconButton from "./ColorIconButton";
import * as React from "react";

it('renders without crashing', () => {
  const color = '';

  const onColorChange = () => {};

  const e = (
    <ColorIconButton color={color} onColorChange={onColorChange}/>
  );

  ReactDOM.render(e, document.createElement('div'));
});
