import * as React from 'react';
import { useState } from 'react';
import styles from './BrightnessSlider.css';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/styles';
import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles(styles);

export const BrightnessSlider = () => {
  const classes = useStyles({});

  const [brightness, setBrightness] = useState(0.5);

  const onChange = (event: any, value: any) => {
    setBrightness(value);
  };

  return (
    <div className={classes.root}>
      <InputLabel htmlFor="brightness">Brightness</InputLabel>

      <Slider
        classes={{ root: classes.slider }}
        value={brightness}
        min={0.0}
        max={1.0}
        step={0.01}
        aria-labelledby="label"
        onChange={onChange}
      />
    </div>
  );
};
