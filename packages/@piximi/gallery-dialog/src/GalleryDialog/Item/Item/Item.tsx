import { useStyles } from './Item.css';
import { Box, IconButton, Card } from '@material-ui/core';
import * as React from 'react';
import { Image } from '@piximi/types';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { useMenu } from '@piximi/hooks';

type ItemProps = {
  image: Image;
  openDialog: () => void;
  setSelectedImage: (image: Image) => void;
};

export const Item = ({ image, openDialog, setSelectedImage }: ItemProps) => {
  const classes = useStyles();

  const onClick = () => {
    setSelectedImage(image);

    openDialog();
  };

  const { anchorEl, closeMenu, openedMenu, openMenu } = useMenu();

  return (
    <Card onClick={onClick} className={classes.card}>
      <img
        alt=""
        className={classes.image}
        key={image.identifier}
        src={image.data}
      />
      <Box className={classes.overlay}>
        <IconButton aria-label="categorize" className={classes.button}>
          <LabelOutlinedIcon />
        </IconButton>
      </Box>
    </Card>
  );
};
