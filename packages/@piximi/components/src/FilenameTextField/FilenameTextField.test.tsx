import ReactDOM from "react-dom";
import FilenameTextField from "./FilenameTextField";
import * as React from "react";

it('renders without crashing', () => {
  const filename = '';

  const onFilenameChange = () => {};

  const e = (
    <FilenameTextField
      filename={filename}
      onFilenameChange={onFilenameChange}
    />
  );

  ReactDOM.render(e, document.createElement('div'));
});
