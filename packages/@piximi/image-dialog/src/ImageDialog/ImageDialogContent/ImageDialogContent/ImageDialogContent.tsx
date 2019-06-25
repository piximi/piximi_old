import * as React from 'react';
import { styles } from './ImageDialogContent.css';
import { makeStyles } from '@material-ui/styles';
import { Image } from '@piximi/types';
import { Image as ImageJS } from 'image-js';

const useStyles = makeStyles(styles);

type ImageDialogContentProps = {
  image: Image;
  imageJS: ImageJS;
};

export const ImageDialogContent = (props: ImageDialogContentProps) => {
  const classes = useStyles({});

  const { image, imageJS } = props;

  return (
    <div className={classes.root}>
      <img src={imageJS.toDataURL()} alt="" />
    </div>
  );
};
