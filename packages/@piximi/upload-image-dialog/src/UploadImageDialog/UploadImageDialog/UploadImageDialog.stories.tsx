import * as React from 'react';
import { ConnectedUploadImageDialog } from './ConnectedUploadImageDialog';
import { Provider } from 'react-redux';
import { store } from '@piximi/store';
import { storiesOf } from '@storybook/react';
import { useDialog } from '@piximi/hooks';

storiesOf('UploadImageDialog', module).add('example', () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <Provider store={store}>
      <button onClick={openDialog}>Upload image</button>

      <ConnectedUploadImageDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
      />
    </Provider>
  );
});
