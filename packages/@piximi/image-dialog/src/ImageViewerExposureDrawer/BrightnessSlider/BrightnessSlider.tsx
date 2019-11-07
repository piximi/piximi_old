import * as React from 'react';
import styles from './BrightnessSlider.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type BrightnessSliderProps = {
  brightness: number;
  setBrightness: (brightness: number) => void;
};

export const BrightnessSlider = (props: BrightnessSliderProps) => {
  const classes = useStyles({});

  const { brightness, setBrightness } = props;

  const onChange = (event: any, value: any) => {
    setBrightness(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Brightness</Typography>

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
