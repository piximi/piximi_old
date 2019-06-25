import * as React from 'react';
import { styles } from './BrightnessSlider.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Slider } from '@material-ui/lab';

const useStyles = makeStyles(styles);

export const BrightnessSlider = () => {
  const classes = useStyles({});

  const onChange = () => {};

  return (
    <div className={classes.root}>
      <Typography style={{ color: 'white' }} id="label">
        Brightness
      </Typography>

      <Slider
        style={{ color: 'white' }}
        classes={{ root: classes.slider }}
        value={0}
        min={0}
        max={1000}
        step={0.5}
        aria-labelledby="label"
        onChange={onChange}
      />
    </div>
  );
};
