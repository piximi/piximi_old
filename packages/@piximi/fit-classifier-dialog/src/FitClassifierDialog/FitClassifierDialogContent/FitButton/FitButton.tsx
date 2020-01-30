import Button from "@material-ui/core/Button/Button";
import {
  compiledSelector,
  dataSelector,
  fitAction,
  fitOptionsSelector,
  validationDataSelector,
  updateLossHistoryAction,
  updateValidationLossHistoryAction
} from "@piximi/store";
import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useStyles} from "./FitButton.css";

export const FitButton = ({next}: {next: any}) => {
  const dispatch = useDispatch();

  const callback = (batch: number, logs: any) => {
    dispatch(updateLossHistoryAction({batch: batch, loss: logs.loss}));
    if (logs.val_loss) {
      dispatch(
        updateValidationLossHistoryAction({batch: batch, loss: logs.val_loss})
      );
    }
  };

  const onClick = useCallback(() => {
    const payload = {
      compiled: compiled,
      data: data,
      validationData: validationData,
      options: options,
      callback: callback
    };

    console.log(payload);

    dispatch(fitAction(payload));

    next();
  }, [dispatch]);

  const compiled = useSelector(compiledSelector);

  const data = useSelector(dataSelector);

  const validationData = useSelector(validationDataSelector);

  const options = useSelector(fitOptionsSelector);

  const classes = useStyles({});

  return (
    <Button
      className={classes.button}
      color="primary"
      onClick={onClick}
      variant="contained"
    >
      Fit
    </Button>
  );
};
