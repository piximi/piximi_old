import * as React from 'react';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import styles from './ContrastSlider.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

export const ContrastSlider = () => {
  const classes = useStyles({});

  const onChange = () => {};

  return (
    <div className={classes.root}>
      <Typography style={{ color: 'white' }} id="label">
        Contrast
      </Typography>

      <Slider
        classes={{ root: classes.slider }}
        min={50}
        max={300}
        step={0.1}
        value={0}
        aria-labelledby="label"
        onChange={onChange}
      />
    </div>
  );
};
