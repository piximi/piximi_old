import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as React from "react";

import {useStyles} from "./InputShape.css";

const INPUT_SHAPES = new Map<string, number[]>();
INPUT_SHAPES.set("96 × 96 × 3", [96, 96, 3]);
INPUT_SHAPES.set("128 × 128 × 3", [128, 128, 3]);
INPUT_SHAPES.set("160 × 160 × 3", [160, 160, 3]);
INPUT_SHAPES.set("192 × 192 × 3", [192, 192, 3]);
INPUT_SHAPES.set("224 × 224 × 3", [224, 224, 3]);

type InputShapeProps = {};

export const InputShape = ({}: InputShapeProps) => {
  const classes = useStyles({});

  const onChange = React.useCallback((event: any, newValue: any) => {
    setInputShape(newValue.key);
  }, []);

  const [inputShape, setInputShape] = React.useState("224 × 224 × 3");

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="input-shape-label">Input shape</InputLabel>
      <Select
        id="input-shape"
        labelId="input-shape-label"
        onChange={onChange}
        value={inputShape}
      >
        {Array.from(INPUT_SHAPES).map(([k, v]: [string, number[]]) => {
          return (
            <MenuItem key={k} value={k}>
              {k}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>&nbsp;</FormHelperText>
    </FormControl>
  );
};
