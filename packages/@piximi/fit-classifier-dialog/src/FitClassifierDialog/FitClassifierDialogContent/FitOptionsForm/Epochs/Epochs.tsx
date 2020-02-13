import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {updateEpochsAction} from "@piximi/store";
import {ClassifierState} from "@piximi/types";

type EpochsProps = {};

export const Epochs = ({}: EpochsProps) => {
  const dispatch = useDispatch();

  const onChange = React.useCallback(
    (event: any) => {
      const action = updateEpochsAction({
        epochs: event.target.value
      });

      dispatch(action);
    },
    [dispatch]
  );

  const epochs = useSelector(
    ({classifier}: {classifier: ClassifierState}): number => {
      return classifier.fitOptions.epochs as number;
    }
  );

  return (
    <TextField
      fullWidth
      id="epochs"
      label="Epochs"
      onChange={onChange}
      value={epochs}
      type={"number"}
    />
  );
};
