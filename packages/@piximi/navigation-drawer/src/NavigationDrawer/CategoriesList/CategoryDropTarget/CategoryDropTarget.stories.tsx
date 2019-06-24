import { storiesOf } from '@storybook/react';
import React from 'react';
import { ConnectedCategoryDropTarget } from './ConnectedCategoryDropTarget';
import { ConnectedCategoryListItem } from '../CategoryListItem/CategoryListItem/ConnectedCategoryListItem';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';

const category = {
  description: 'example',
  identifier: '11111111-1111-1111-1111-11111111111',
  index: 1,
  visible: true,
  visualization: {
    color: '#F44336',
    visible: true
  }
};

storiesOf('CategoryDropTarget', module).add('example', () => (
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <ConnectedCategoryDropTarget category={category}>
        <ConnectedCategoryListItem category={category} isOver={true} />
      </ConnectedCategoryDropTarget>
    </DndProvider>
  </Provider>
));
