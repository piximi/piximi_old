import { default as React } from 'react';
import { Canvas } from 'react-three-fiber';
import { Image } from '../Image';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import styles from '../../ImageViewer/ImageViewer.css';

type ImageCanvasProps = {
  src: string;
};

const useStyles = makeStyles(styles);

export const ImageCanvas = (props: ImageCanvasProps) => {
  const classes = useStyles({});

  const { src } = props;

  return (
    <Grid
      className={classes.container}
      container
      alignItems="center"
      justify="center"
      spacing={3}
    >
      <Canvas>
        <Image src={src} />
      </Canvas>
    </Grid>
  );
};
