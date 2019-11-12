import { default as React } from 'react';
import { Canvas } from 'react-three-fiber';
import { Image } from '../Image';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { styles } from './ImageCanvas.css';
import * as imagejs from 'image-js';

type ImageCanvasProps = {
  channels: { r: boolean; g: boolean; b: boolean };
  image: imagejs.Image;
};

const useStyles = makeStyles(styles);

export const ImageCanvas = (props: ImageCanvasProps) => {
  const classes = useStyles({});

  const { channels, image } = props;

  return (
    <Grid className={classes.container} container>
      <Grid item xs={10} className={classes.canvas}>
        <Canvas>
          <Image channels={channels} image={image} />
        </Canvas>
      </Grid>
    </Grid>
  );
};
