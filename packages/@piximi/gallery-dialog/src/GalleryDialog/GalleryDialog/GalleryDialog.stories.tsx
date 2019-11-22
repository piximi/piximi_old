import React from 'react';
import { storiesOf } from '@storybook/react';
import { GalleryDialog } from './GalleryDialog';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { store } from '@piximi/store';
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import * as types from '@piximi/types';

const categories: types.Category[] = [
  {
    description: 'aaa',
    identifier: '00000000-0000-0000-0000-000000000000',
    index: 0,
    visualization: {
      color: '',
      visible: true
    }
  },
  {
    description: 'bbb',
    identifier: '11111111-0000-0000-0000-000000000000',
    index: 1,
    visualization: {
      color: '',
      visible: true
    }
  },
  {
    description: 'ccc',
    identifier: '22222222-0000-0000-0000-000000000000',
    index: 2,
    visualization: {
      color: '',
      visible: true
    }
  }
];

const images: types.Image[] = [
  {
    categoryIdentifier: '11111111-0000-0000-0000-000000000000',
    checksum: '',
    data: 'https://picsum.photos/224/224',
    identifier: '00000000-1111-0000-0000-000000000000',
    partition: types.Partition.Training,
    scores: [],
    visualization: {
      brightness: 1.0,
      contrast: 1.0,
      visible: true,
      visibleChannels: []
    }
  },
  {
    categoryIdentifier: '11111111-0000-0000-0000-000000000000',
    checksum: '',
    data: 'https://picsum.photos/224/224',
    identifier: '00000000-2222-0000-0000-000000000000',
    partition: types.Partition.Training,
    scores: [],
    visualization: {
      brightness: 1.0,
      contrast: 1.0,
      visible: true,
      visibleChannels: []
    }
  },
  {
    categoryIdentifier: '22222222-0000-0000-0000-000000000000',
    checksum: '',
    data: 'https://picsum.photos/224/224',
    identifier: '00000000-3333-0000-0000-000000000000',
    partition: types.Partition.Training,
    scores: [],
    visualization: {
      brightness: 1.0,
      contrast: 1.0,
      visible: true,
      visibleChannels: []
    }
  },
  {
    categoryIdentifier: '22222222-0000-0000-0000-000000000000',
    checksum: '',
    data: 'https://picsum.photos/224/224',
    identifier: '00000000-4444-0000-0000-000000000000',
    partition: types.Partition.Training,
    scores: [],
    visualization: {
      brightness: 1.0,
      contrast: 1.0,
      visible: true,
      visibleChannels: []
    }
  }
];

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

storiesOf('GalleryDialog', module).add('example', () => (
  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GalleryDialog
          categories={categories}
          images={images}
          callOnDragEnd={() => {}}
          selectedImages={[]}
        />
      </ThemeProvider>
    </Provider>
  </DndProvider>
));
