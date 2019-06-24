import * as React from 'react';
import { saveAs } from 'file-saver';
import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogContent,
  AlertDialogTitle,
  FilenameTextField
} from '@piximi/components';
import { Classifier } from '@piximi/types';

type SaveClassifierDialogProps = {
  classifier: Classifier;
  open: boolean;
  onClose: () => void;
};

export const SaveClassifierDialog = (props: SaveClassifierDialogProps) => {
  const { classifier, open, onClose } = props;

  const [filename, setFilename] = React.useState<string>(classifier.name);

  const onAcceptance = () => {
    const parts = {
      categories: classifier.categories,
      images: classifier.images,
      name: classifier.name,
      version: '0.1.0'
    };

    const options = {
      type: 'text/json;charset=utf-8'
    };

    const blob = new Blob([JSON.stringify(parts, null, 4)], options);

    saveAs(blob, `${filename}.piximi`);

    onClose();
  };

  const onFilenameChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    setFilename(target.value);
  };

  return (
    <AlertDialog open={open} onClose={onClose}>
      <AlertDialogTitle title="Save classifier" />

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
