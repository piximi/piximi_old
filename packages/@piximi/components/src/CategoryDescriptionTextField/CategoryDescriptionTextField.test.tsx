import { shallow } from 'enzyme';
import * as React from 'react';

import CategoryDescriptionTextField from './CategoryDescriptionTextField';

it('CategoryDescriptionTextField', () => {
  const description: string = '';

  const onDescriptionChange = () => {};

  const e = (
    <CategoryDescriptionTextField
      description={description}
      onDescriptionChange={onDescriptionChange}
    />
  );

  shallow(e);
});
