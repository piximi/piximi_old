import { shallow } from 'enzyme';
import * as React from 'react';

import { DialogActions } from './DialogActions';

it('DialogActions', () => {
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

  shallow(e);
});
