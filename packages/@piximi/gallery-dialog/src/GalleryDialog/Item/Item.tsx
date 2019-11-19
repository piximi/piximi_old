import { useStyles } from './Item.css';
import { IconButton, Card } from '@material-ui/core';
import * as React from 'react';
import { Image } from '@piximi/types';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDialog } from '@piximi/hooks';
import { ImageViewerDialog } from '@piximi/image-dialog';

const styles = {
  media: {
    height: 0
  },
  card: {
    marginTop: '1em',
    position: 'relative'
  },
  button: {
    backgroundColor: 'red'
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    marginTop: 0,
    opacity: '0.2',
    color: 'rgba(255,255,255,1)',
    background:
      'linear-gradient(0deg, rgba(255,255,255,1) 5%, rgba(0,0,0,1) 95%)'
  },
  icon: {
    padding: '0px'
  }
};

type ItemProps = {
  image: Image;
  openDialog: () => void;
  setSelectedImage: () => void;
};

export const Item = ({ image, openDialog, setSelectedImage }: ItemProps) => {
  const classes = useStyles();

  const onClick = () => {
    setSelectedImage(image);

    openDialog();
  };

  return (
    <Card onClick={onClick} style={styles.card}>
      <img
        alt=""
        className={classes.image}
        key={image.identifier}
        src={image.data}
      />
      <div style={styles.overlay}>
        <IconButton aria-label="categorize">
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  );
};
