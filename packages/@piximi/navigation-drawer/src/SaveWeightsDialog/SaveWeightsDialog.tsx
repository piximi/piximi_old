import * as React from 'react';
import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogContent,
  AlertDialogTitle,
  FilenameTextField
} from '@piximi/components';

type SaveWeightsDialogProps = {
  open: boolean;
  onClose: () => void;
};

export const SaveWeightsDialog = (props: SaveWeightsDialogProps) => {
  const { open, onClose } = props;

  const [filename, setFilename] = React.useState<string>('');

  const onAcceptance = () => {
    onClose();
  };

  const onFilenameChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setFilename(target.value);
  };

  return (
    <AlertDialog open={open} onClose={onClose}>
      <AlertDialogTitle title="Save weights" />

      <AlertDialogContent>
        <FilenameTextField
          filename={filename}
          onFilenameChange={onFilenameChange}
        />
      </AlertDialogContent>

      <AlertDialogActions
        acceptanceTitle="Save"
        cancellationTitle="Cancel"
        onAcceptance={onAcceptance}
        onCancellation={onClose}
      />
    </AlertDialog>
  );
};
