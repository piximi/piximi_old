import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedCategoryListItem } from './ConnectedCategoryListItem';
import { Category } from '@piximi/types';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const category: Category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

storiesOf('CategoryListItem', module).add('example', () => (
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <ConnectedCategoryListItem category={category} isOver={true} />
    </DndProvider>
  </Provider>
));
