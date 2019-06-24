import { shallow } from 'enzyme';
import * as React from 'react';

import { AlertDialogActions } from './AlertDialogActions';

it('AlertDialogActions', () => {
  const acceptanceTitle = '';

  const cancellationTitle = '';

  const onAcceptance = () => {};

  const onCancellation = () => {};

  const e = (
    <AlertDialogActions
      acceptanceTitle={acceptanceTitle}
      cancellationTitle={cancellationTitle}
      onAcceptance={onAcceptance}
      onCancellation={onCancellation}
    />
  );

  shallow(e);
});
