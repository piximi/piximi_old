import { useStyles } from './Item.css';
import { Card } from '@material-ui/core';
import * as React from 'react';
import { Image } from '@piximi/types';

type ItemProps = {
  image: Image;
};
export const Item = ({ image }: ItemProps) => {
  const classes = useStyles();

  return (
    <Card>
      <img
        alt=""
        className={classes.image}
        key={image.identifier}
        src={image.data}
      />
    </Card>
  );
};
