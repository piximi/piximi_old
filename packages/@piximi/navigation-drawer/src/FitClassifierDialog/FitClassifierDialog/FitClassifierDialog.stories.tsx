import React from 'react';
import { storiesOf } from '@storybook/react';
import { FitClassifierDialog } from './FitClassifierDialog';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { Category, Image, Partition } from '@piximi/types';
import foo from './foo.png';

const closeDialog = () => {};

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const categories: Category[] = [
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

const images: Image[] = [
  {
    categoryIdentifier: '11111111-0000-0000-0000-000000000000',
    checksum: '',
    data: 'https://picsum.photos/224/224',
    identifier: '00000000-1111-0000-0000-000000000000',
    partition: Partition.Training,
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
    data: 'https://picsum.photos/id/1006/3000/2000',
    identifier: '00000000-2222-0000-0000-000000000000',
    partition: Partition.Training,
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
    data: 'https://picsum.photos/id/10/2500/1667',
    identifier: '00000000-3333-0000-0000-000000000000',
    partition: Partition.Training,
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
    data: 'https://picsum.photos/id/1001/5616/3744',
    identifier: '00000000-4444-0000-0000-000000000000',
    partition: Partition.Training,
    scores: [],
    visualization: {
      brightness: 1.0,
      contrast: 1.0,
      visible: true,
      visibleChannels: []
    }
  }
];

storiesOf('FitClassifierDialog', module).add('example', () => (
  <ThemeProvider theme={theme}>
    <FitClassifierDialog
      categories={categories}
      closeDialog={closeDialog}
      images={images}
      openedDialog
      openedDrawer={false}
    />
  </ThemeProvider>
));
