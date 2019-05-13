import React from 'react';

import { storiesOf } from '@storybook/react';

import { CategoryDropTarget } from "..";

storiesOf('CategoryDropTarget', module)
  .add('example', () => (
    <CategoryDropTarget category={} updateImageCategory={}>
      <div/>
    </CategoryDropTarget>
  ));
