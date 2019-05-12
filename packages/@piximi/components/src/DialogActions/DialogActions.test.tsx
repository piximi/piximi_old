import ReactDOM from 'react-dom';
import * as React from 'react';

import DialogActions from './DialogActions';

it('renders without crashing', () => {
  const acceptanceTitle = '';

  const cancellationTitle = '';

  const onAcceptance = () => {};

  const onCancellation = () => {};

  const e = (
    <DialogActions
      acceptanceTitle={acceptanceTitle}
      cancellationTitle={cancellationTitle}
      onAcceptance={onAcceptance}
      onCancellation={onCancellation}
    />
  );

  ReactDOM.render(e, document.createElement('div'));
});
