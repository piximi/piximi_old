import ReactDOM from "react-dom";
import ImageDragSource from "./ImageDragSource";
import * as React from "react";

it('renders without crashing', () => {
  const item = '';

  const onmousedown = () => {};

  const selectedItems: any[] = [];

  const e = (
    <ImageDragSource
      item={item}
      onmousedown={onmousedown}
      selectedItems={selectedItems}
    >
      <div>

      </div>
    </ImageDragSource>
  );

  ReactDOM.render(e, document.createElement('div'));
});
