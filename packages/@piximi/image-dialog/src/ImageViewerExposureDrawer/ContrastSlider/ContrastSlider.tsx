import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from './ContrastSlider.css';
import { makeStyles } from '@material-ui/styles';
import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles(styles);

type ContrastSliderProps = {
  contrast: number;
  setContrast: (contrast: number) => void;
};

export const ContrastSlider = (props: ContrastSliderProps) => {
  const { contrast, setContrast } = props;

  const classes = useStyles({});

  const onChange = (event: any, value: any) => {
    setContrast(value);
  };

  return (
    <div className={classes.root}>
      <InputLabel htmlFor="my-input">Contrast</InputLabel>
      <Slider
        classes={{ root: classes.slider }}
        min={0.0}
        max={1.0}
        step={0.01}
        value={contrast}
        aria-labelledby="label"
        onChange={onChange}
      />
    </div>
  );
};
