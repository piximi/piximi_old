import * as React from "react";
import * as MaterialUI from "@material-ui/core";
import {SaveAnnotationsAndPredictionsDialog} from "../../../../SaveAnnotationsAndPredictionsDialog/";
import {SaveWeightsDialog} from "../../../../SaveWeightsDialog/";
import {ConnectedSaveClassifierDialog} from "../../../../SaveClassifierDialog/ConnectedSaveClassifierDialog";
import {useDialog} from "@piximi/hooks";
import {Paper} from "@material-ui/core";

type Props = {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
};

export const SaveMenuList = (props: Props) => {
  const {anchorEl, onClose, open} = props;

  const anchorPosition = {
    top: open ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: open ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  const {
    openedDialog: openedSaveClassifierDialog,
    openDialog: openSaveClassifierDialog,
    closeDialog: closeSaveClassifierDialog
  } = useDialog();

  const onSaveClassifierClick = () => {
    openSaveClassifierDialog();

    onClose();
  };

  const {
    openedDialog: openedSaveAnnotationsAndPredictionsDialog,
    openDialog: openSaveAnnotationsAndPredictionsDialog,
    closeDialog: closeSaveAnnotationsAndPredictionsDialog
  } = useDialog();

  const onSaveAnnotationsAndPredictionsClick = () => {
    openSaveAnnotationsAndPredictionsDialog();

    onClose();
  };

  const {
    openedDialog: openedSaveWeightsDialog,
    openDialog: openSaveWeightsDialog,
    closeDialog: closeSaveWeightsDialog
  } = useDialog();

  const onSaveWeightsClick = () => {
    openSaveWeightsDialog();

    onClose();
  };

  return (
    // @ts-ignore
    <React.Fragment>
      // @ts-ignore
      <MaterialUI.Popover
        anchorPosition={anchorPosition}
        anchorReference="anchorPosition"
        onClose={onClose}
        open={open}
      >
        // @ts-ignore
        <MaterialUI.Paper>
          // @ts-ignore
          <MaterialUI.MenuList dense>
            <MaterialUI.MenuItem onClick={onSaveClassifierClick}>
              // @ts-ignore
              <MaterialUI.ListItemText primary="Save classifier" />
            </MaterialUI.MenuItem>

            <MaterialUI.Divider />

            <MaterialUI.MenuItem onClick={onSaveAnnotationsAndPredictionsClick}>
              // @ts-ignore
              <MaterialUI.ListItemText primary="Save annotations and predictions" />
            </MaterialUI.MenuItem>

            <MaterialUI.MenuItem onClick={onSaveWeightsClick}>
              // @ts-ignore
              <MaterialUI.ListItemText primary="Save weights" />
            </MaterialUI.MenuItem>
          </MaterialUI.MenuList>
        </MaterialUI.Paper>
      </MaterialUI.Popover>
      // @ts-ignore
      <ConnectedSaveClassifierDialog
        open={openedSaveClassifierDialog}
        onClose={closeSaveClassifierDialog}
      />
      <SaveAnnotationsAndPredictionsDialog
        open={openedSaveAnnotationsAndPredictionsDialog}
        onClose={closeSaveAnnotationsAndPredictionsDialog}
      />
      <SaveWeightsDialog
        open={openedSaveWeightsDialog}
        onClose={closeSaveWeightsDialog}
      />
    </React.Fragment>
  );
};
