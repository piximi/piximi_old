import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogContent,
  AlertDialogTitle
} from '@piximi/components';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

type NewClassifierDialogProps = {
  openClassifier: any;
  openedDialog: any;
  closeDialog: any;
};

export const NewClassifierDialog = (props: NewClassifierDialogProps) => {
  const { openClassifier, openedDialog, closeDialog } = props;

  const { t: translation } = useTranslation();

  const [name, setName] = React.useState(translation('Untitled classifier'));

  const onCreateClassifierClick = () => {
    openClassifier(name);

    closeDialog();
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <AlertDialog open={openedDialog} onClose={closeDialog}>
      <AlertDialogTitle title={'Create new classifier'} />

      <AlertDialogContent>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Name"
          margin="dense"
          onChange={onNameChange}
          placeholder={translation('Untitled classifier')}
          type="text"
        />
      </AlertDialogContent>

      <AlertDialogActions
        acceptanceTitle={'Create'}
        cancellationTitle={'Cancel'}
        onAcceptance={onCreateClassifierClick}
        onCancellation={closeDialog}
      />
    </AlertDialog>
  );
};
