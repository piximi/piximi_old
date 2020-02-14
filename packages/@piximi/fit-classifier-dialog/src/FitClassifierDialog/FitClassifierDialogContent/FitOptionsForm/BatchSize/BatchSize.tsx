import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {updateBatchSizeAction} from "@piximi/store";
import {ClassifierState} from "@piximi/types";

type BatchSizeProps = {};

export const BatchSize = ({}: BatchSizeProps) => {
  const dispatch = useDispatch();

  const onChange = React.useCallback(
    (event: any) => {
      const action = updateBatchSizeAction({
        batchSize: event.target.value
      });

      dispatch(action);
    },
    [dispatch]
  );

  const batchSize = useSelector(
    ({classifier}: {classifier: ClassifierState}): number => {
      return classifier.fitOptions.batchSize as number;
    }
  );
  return (
    <TextField
      fullWidth
      id="batch-size"
      label="Batch size"
      onChange={onChange}
      value={batchSize}
      type={"number"}
    />
  );
};
