import React from 'react';
import { storiesOf } from '@storybook/react';
import { History } from './History';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';

const lossData = [{ x: 0, y: 0 }];
const validationLossData = [{ x: 0, y: 0 }];

const accuracyData = [{ x: 0, y: 0 }];
const validationAccuracyData = [{ x: 0, y: 0 }];

storiesOf('History', module).add('example', () => (
  <Provider store={store}>
    <History
      lossData={lossData}
      validationLossData={validationLossData}
      accuracyData={accuracyData}
      validationAccuracyData={validationAccuracyData}
    />
  </Provider>
));
