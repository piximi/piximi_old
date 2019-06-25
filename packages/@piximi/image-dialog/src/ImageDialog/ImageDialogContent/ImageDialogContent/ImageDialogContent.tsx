import * as React from 'react';
import { styles } from './ImageDialogContent.css';
import { makeStyles } from '@material-ui/styles';
import { Image } from '@piximi/types';

const useStyles = makeStyles(styles);

type ImageDialogContentProps = {
  image: Image;
};

export const ImageDialogContent = (props: ImageDialogContentProps) => {
  const classes = useStyles({});

  const { image } = props;

  return (
    <div className={classes.root}>
      <img src={image.data} alt="" />
    </div>
  );
};
