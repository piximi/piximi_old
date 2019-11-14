import * as React from 'react';
import { Category, Image } from '@piximi/types';
import { Gallery } from '../Gallery';
import { Column } from '../Column';
import { Card } from '@material-ui/core';
import { useStyles } from './GalleryDialog.css';

type GalleryProps = {
  categories: Array<Category>;
  numberOfColumns?: number;
  images: Array<Image>;
};

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

export const GalleryDialog = ({
  categories,
  numberOfColumns = 5,
  images
}: GalleryProps) => {
  const itemsPerCol = images.length / numberOfColumns;

  const itemsToCols = (images: Array<Image>, imagesPerRow = 4): Array<any> => {
    const numberOfColumns = Math.ceil(images.length / imagesPerRow);

    let columns = [];

    for (let column = 0; column < numberOfColumns - 1; column++) {
      columns.push(
        images.slice(
          column * imagesPerRow,
          column * imagesPerRow + imagesPerRow
        )
      );
    }

    columns.push(
      images.slice((numberOfColumns - 1) * imagesPerRow, images.length)
    );

    return columns;
  };

  const columns: Array<any> = itemsToCols(images, itemsPerCol);

  return (
    <Gallery>
      {columns.map((column: Array<Image>, index: number) => {
        return (
          <Column key={index} numberOfColumns={numberOfColumns}>
            {column.map((image: Image) => {
              return <Item image={image} />;
            })}
          </Column>
        );
      })}
    </Gallery>
  );
};
