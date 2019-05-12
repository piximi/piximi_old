import ReactDOM from "react-dom";
import ColorPicker from "./ColorPicker";
import * as React from "react";
import { Category } from "../types";

it('renders without crashing', () => {
  const categories: Category[] = [];

  const onChange = () => {};

  const e = (
    <ColorPicker categories={categories} onChange={onChange}/>
  );

  ReactDOM.render(e, document.createElement('div'));
});
