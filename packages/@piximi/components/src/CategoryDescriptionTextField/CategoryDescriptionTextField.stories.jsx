import React from 'react';

import { storiesOf } from '@storybook/react';

import { CategoryDescriptionTextField } from "..";

const description = '';

const onDescriptionChange = () => {};

storiesOf('CategoryDescriptionTextField', module)
  .add('example', () => (
    <CategoryDescriptionTextField
      description={description}
      onDescriptionChange={onDescriptionChange}
    />
  ));
