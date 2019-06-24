import React from 'react';
import { storiesOf } from '@storybook/react';
import { EditCategoryDialog } from './EditCategoryDialog';
import { Category } from '@piximi/types';

const category: Category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

const updateColor = (identifier: string, color: string) => {};

const updateDescription = (identifier: string, description: string) => {};

const onClose = () => {};

storiesOf('EditCategoryDialog', module).add('example', () => (
  <EditCategoryDialog
    category={category}
    updateColor={updateColor}
    updateDescription={updateDescription}
    onClose={onClose}
    open
  />
));
