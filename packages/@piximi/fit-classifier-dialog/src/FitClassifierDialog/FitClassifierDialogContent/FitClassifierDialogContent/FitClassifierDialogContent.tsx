import DialogContent from "@material-ui/core/DialogContent";
import * as React from "react";

import {FitClassifierDialogContentStepper} from "../FitClassifierDialogContentStepper";
import {History} from "../History";
import {useStyles} from "./FitClassifierDialogContent.css";

type FitClassifierDialogContentStepperProps = {};

export const FitClassifierDialogContent = ({}: FitClassifierDialogContentStepperProps) => {
  const classes = useStyles({});

  return (
    <DialogContent className={classes.dialogContent}>
      <History
        status={"Training"}
        lossData={[]}
        validationLossData={[]}
        accuracyData={[]}
        validationAccuracyData={[]}
      />

      <FitClassifierDialogContentStepper />
    </DialogContent>
  );
};
