import { default as React } from 'react';
import { Canvas } from 'react-three-fiber';
import { Image } from '../Image';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { styles } from './ImageCanvas.css';

type ImageCanvasProps = {
  src: string;
};

const useStyles = makeStyles(styles);

export const ImageCanvas = (props: ImageCanvasProps) => {
  const classes = useStyles({});

  const { src } = props;

  return (
    <Grid className={classes.container} container>
      <Grid item xs={10} className={classes.canvas}>
        <Canvas>
          <Image src={src} />
        </Canvas>
      </Grid>
    </Grid>
  );
};
