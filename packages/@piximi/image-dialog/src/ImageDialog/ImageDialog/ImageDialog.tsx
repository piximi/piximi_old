import * as React from 'react';
import { styles } from './ImageDialog.css';
import { Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ConnectedImageDialogContent } from '../ImageDialogContent/ImageDialogContent';
import { Image } from '@piximi/types';
import { ImageDialogAppBar } from '../ImageDialogAppBar';
import { NavigationDrawer } from '../ImageDialogContent/NavigationDrawer/NavigationDrawer';
import { Image as ImageJS } from 'image-js';

const useStyles = makeStyles(styles);

type ImageDialogProps = {
  item: Image;
  onClose: () => void;
  open: boolean;
};

export const ImageDialog = (props: ImageDialogProps) => {
  const classes = useStyles({});

  const { item, onClose, open } = props;

  const [imageJS, setImageJS] = React.useState(new ImageJS());

  React.useEffect(() => {
    const open = async () => {
      ImageJS.load(item.data).then((response: ImageJS) => {
        setImageJS(response);
      });
    };

    open();
  }, [imageJS]);

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={onClose}>
      <ImageDialogAppBar onClose={onClose} />

      <ConnectedImageDialogContent image={item} imageJS={imageJS} />

      <NavigationDrawer image={item} />
    </Dialog>
  );
};
