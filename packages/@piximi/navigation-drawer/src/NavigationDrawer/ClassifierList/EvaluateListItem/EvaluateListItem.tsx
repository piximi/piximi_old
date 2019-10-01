import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import { useTranslation } from 'react-i18next';
import { useDialog } from '@piximi/hooks';
import { Category, Image } from '@piximi/types';
import { ConnectedEvaluateClassifierDialog } from '../../../EvaluateClassifierDialog/EvaluateClassifierDialog';

type EvaluateListItemProbs = {
  categories: Category[];
  images: Image[];
  datasetInitialized: boolean;
  setDatasetInitialized: (datasetInitialized: boolean) => void;
};

export const EvaluateListItem = (probs: EvaluateListItemProbs) => {
  const {
    categories,
    images,
    datasetInitialized,
    setDatasetInitialized
  } = probs;

  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t: translation } = useTranslation();

  const evaluate = async () => {
    openDialog();
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={evaluate}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Evaluate')} />
      </ListItem>

      <ConnectedEvaluateClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
        openedDrawer={true}
        datasetInitialized={datasetInitialized}
        setDatasetInitialized={setDatasetInitialized}
      />
    </React.Fragment>
  );
};
