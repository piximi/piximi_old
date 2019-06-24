import React from 'react';

import { storiesOf } from '@storybook/react';

import { ImageDragSource } from '..';

const item = '';

const onmousedown = () => {};

const selectedItems: any[] = [];

storiesOf('ImageDragSource', module).add('example', () => (
  <ImageDragSource
    selectedItems={selectedItems}
    onmousedown={onmousedown}
    item={item}
  >
    <div />
  </ImageDragSource>
));
