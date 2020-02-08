import Grid from "@material-ui/core/Grid";
import * as React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import {useDispatch, useSelector} from "react-redux";
import {
  validationPercentageSelector,
  trainingPercentageSelector
} from "@piximi/store";
import {useCallback} from "react";
import {
  updateValidationPercentageAction,
  updateTrainingPercentageAction
} from "@piximi/store/dist";

export const DataSetSplits = () => {
  const dispatch = useDispatch();

  const onChange = useCallback(
    (event: any, newValue: number[]) => {
      const trainingPercentage = Math.round(newValue[0] * 100) / 100;
      const validationPercentage =
        Math.round((newValue[1] - trainingPercentage) * 100) / 100;

      const trainingPercentagePayload = {
        trainingPercentage: trainingPercentage
      };
      const validationPercentagePayload = {
        validationPercentage: validationPercentage
      };

      dispatch(updateTrainingPercentageAction(trainingPercentagePayload));
      dispatch(updateValidationPercentageAction(validationPercentagePayload));

      setValue(newValue);
    },
    [dispatch]
  );

  const trainingPercentage = useSelector(trainingPercentageSelector);
  const validationPercentage = useSelector(validationPercentageSelector);

  const [value, setValue] = React.useState([
    trainingPercentage,
    trainingPercentage + validationPercentage
  ]);

  const trainingPercentageToString = (): string => {
    return `Training set percentage: ${trainingPercentage * 100}%`;
  };

  const validationPercentageToString = (): string => {
    return `Validation set percentage: ${validationPercentage * 100}%`;
  };

  const testPercentage =
    Math.round((1 - trainingPercentage - validationPercentage) * 100) / 100;
  const testPercentageToString = (): string => {
    return `Test set percentage: ${testPercentage * 100}%`;
  };

  return (
    <Grid container>
      <Typography id="data-set-splits-percentages" gutterBottom>
        Data split percentages
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <Slider
            aria-labelledby="data-set-splits-percentages"
            max={1.0}
            min={0.0}
            onChange={onChange}
            step={0.01}
            value={value}
          />
        </Grid>
      </Grid>

      <Grid item xs={2}>
        <Input
          value={trainingPercentageToString()}
          margin="dense"
          style={{minWidth: "210px"}}
        />
      </Grid>
      <Grid item xs={2}>
        <Input
          value={validationPercentageToString()}
          margin="dense"
          style={{minWidth: "220px"}}
        />
      </Grid>
      <Grid item xs={2}>
        <Input value={testPercentageToString()} margin="dense" />
      </Grid>
    </Grid>
  );
};
