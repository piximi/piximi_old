import {ListItem, ListItemIcon, ListItemText, Paper} from "@material-ui/core";
import * as React from "react";
import ScatterPlotIcon from "@material-ui/icons/ScatterPlot";
import {useTranslation} from "react-i18next";
import {useDialog} from "@piximi/hooks";
import {ConnectedFitClassifierDialog} from "../../../FitClassifierDialog/FitClassifierDialog/ConnectedFitClassifierDialog";

type FitListItemProps = {
  datasetInitialized: boolean;
  setDatasetInitialized: (datasetInitialized: boolean) => void;
};

export const FitListItem = (props: FitListItemProps) => {
  const {datasetInitialized, setDatasetInitialized} = props;

  const {openedDialog, openDialog, closeDialog} = useDialog();

  const {t: translation} = useTranslation();

  const fit = async () => {
    openDialog();
  };

  return (
    // @ts-ignore
    <React.Fragment>
      <ListItem button dense onClick={fit}>
        // @ts-ignore
        <ListItemIcon>
          <ScatterPlotIcon />
        </ListItemIcon>
        // @ts-ignore
        <ListItemText primary={translation("Fit")} />
      </ListItem>
      // @ts-ignore
      <ConnectedFitClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
        openedDrawer={true}
        datasetInitialized={datasetInitialized}
        setDatasetInitialized={setDatasetInitialized}
      />
    </React.Fragment>
  );
};
