import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedFitClassifierDialog } from './ConnectedFitClassifierDialog';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { Category, Image, Partition } from '@piximi/types';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

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
    data: 'https://picsum.photos/224/224',
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
    data: 'https://picsum.photos/224/224',
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
    data: 'https://picsum.photos/224/224',
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
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ConnectedFitClassifierDialog
        closeDialog={closeDialog}
        openedDialog
        openedDrawer={false}
        datasetInitialized={true}
        setDatasetInitialized={(datasetInitialized: boolean) => {}}
      />
    </ThemeProvider>
  </Provider>
));
