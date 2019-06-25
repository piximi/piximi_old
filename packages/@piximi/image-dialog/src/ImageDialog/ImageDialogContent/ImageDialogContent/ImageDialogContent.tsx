import * as React from 'react';
import { styles } from './ImageDialogContent.css';
import { makeStyles } from '@material-ui/styles';
import { NavigationDrawer } from '../NavigationDrawer/NavigationDrawer';
import { Image } from '@piximi/types';
import { ImageDialogAppBar } from '../../ImageDialogAppBar';

const useStyles = makeStyles(styles);

type ImageDialogContentProps = {
  image: Image;
  onClose: () => void;
};

export const ImageDialogContent = (props: ImageDialogContentProps) => {
  const classes = useStyles({});

  const [exposureDrawerToggled, setExposureDrawerToggled] = React.useState(
    true
  );
  const [brightness, setBrightness] = React.useState(100);
  const [contrast, setContrast] = React.useState(100);
  const [unselectedChannels, setUnselectedChannels] = React.useState([]);

  const { image, onClose } = props;

  const toggleExposureDrawer = () => {
    setExposureDrawerToggled(!exposureDrawerToggled);
  };

  return (
    <div className={classes.root}>
      <ImageDialogAppBar onClose={onClose} />

      <img src={image.data} alt="" />

      <NavigationDrawer
        onClose={toggleExposureDrawer}
        open={exposureDrawerToggled}
        src={image.data}
        imgIdentifier={image.identifier}
        setBrightness={setBrightness}
        brightness={brightness}
        setContrast={setContrast}
        contrast={contrast}
        setUnselectedChannels={setUnselectedChannels}
        unselectedChannels={unselectedChannels}
      />
    </div>
  );
};
