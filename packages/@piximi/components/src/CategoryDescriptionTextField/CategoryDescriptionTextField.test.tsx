import ReactDOM from "react-dom";
import CategoryDescriptionTextField from "./CategoryDescriptionTextField";
import * as React from "react";

it('renders without crashing', () => {
  const description: string = '';

  const onDescriptionChange = () => {};

  const e = (
    <CategoryDescriptionTextField
      description={description}
      onDescriptionChange={onDescriptionChange}
    />
  );

  ReactDOM.render(e, document.createElement('div'));
});
