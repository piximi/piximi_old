import React from 'react';

import { storiesOf } from '@storybook/react';

import { ColorPicker } from '..';

const categories = [
  {
    color: '#F44336',
    description: 'example',
    identifier: '11111111-1111-1111-1111-11111111111',
    index: 1,
    visible: true
  }
];

const onChange = () => {};

storiesOf('ColorPicker', module).add('example', () => <div />);
