import ReactDOM from 'react-dom';
import * as React from 'react';

import CategoryDescriptionTextField from './CategoryDescriptionTextField';

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
