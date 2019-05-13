import React from 'react';

import { storiesOf } from '@storybook/react';

import { ImageDragSource } from "..";

storiesOf('ImageDragSource', module)
  .add('example', () => (
    <ImageDragSource selectedItems={} onmousedown={} item={}>
      <div/>
    </ImageDragSource>
  ));
