import {
  AlertDialog,
  AlertDialogActions,
  AlertDialogContent,
  AlertDialogTitle
} from "@piximi/components";
import {TextField} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import * as React from "react";

type NewClassifierDialogProps = {
  openProject: (name: string) => void;
  openedDialog: boolean;
  closeDialog: () => void;
};

export const NewClassifierDialog = (props: NewClassifierDialogProps) => {
  const {openProject, openedDialog, closeDialog} = props;

  const {t: translation} = useTranslation();

  const [name, setName] = React.useState(translation("Untitled classifier"));

  const onCreateClassifierClick = () => {
    openProject(name);

    closeDialog();
  };

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <AlertDialog open={openedDialog} onClose={closeDialog}>
      <AlertDialogTitle title={"Create new classifier"} />

      <AlertDialogContent>
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Name"
          margin="dense"
          onChange={onNameChange}
          placeholder={translation("Untitled classifier")}
          type="text"
        />
      </AlertDialogContent>

      <AlertDialogActions
        acceptanceTitle={"Create"}
        cancellationTitle={"Cancel"}
        onAcceptance={onCreateClassifierClick}
        onCancellation={closeDialog}
      />
    </AlertDialog>
  );
};
