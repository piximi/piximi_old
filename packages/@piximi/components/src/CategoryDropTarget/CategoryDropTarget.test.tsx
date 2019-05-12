import ReactDOM from "react-dom";
import CategoryDropTarget from "./CategoryDropTarget";
import * as React from "react";
import { Category } from "../types";

it('renders without crashing', () => {
  const category: Category = {
    classifierIdentifier: '',
    color: '',
    description: '',
    identifier: '',
    index: 0,
    visible: true
  };

  const updateImageCategory = () => {};

  const e = (
    <CategoryDropTarget
      category={category}
      updateImageCategory={updateImageCategory}
    >
      <div/>
    </CategoryDropTarget>
  );

  ReactDOM.render(e, document.createElement('div'));
});
