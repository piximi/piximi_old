import * as React from 'react';
import { Category, Image } from '@piximi/types';
import { Gallery } from '../Gallery';
import { Column } from '../Column';
import { Item } from '../Item/Item';
import LazyLoad from 'react-lazyload';
import { useDialog } from '@piximi/hooks';
import { ImageViewerDialog } from '@piximi/image-dialog';
import { useState } from 'react';

type GalleryProps = {
  categories: Array<Category>;
  numberOfColumns?: number;
  images: Array<Image>;
};

export const GalleryDialog = ({
  categories,
  numberOfColumns = 4,
  images
}: GalleryProps) => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const [selectedImage, setSelectedImage] = useState(images[0]);

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
    <>
      <Gallery>
        {columns.map((column: Array<Image>, index: number) => {
          return (
            <Column key={index} numberOfColumns={numberOfColumns}>
              {column.map((image: Image) => {
                return (
                  <LazyLoad height="100%">
                    <Item
                      image={image}
                      openDialog={openDialog}
                      setSelectedImage={setSelectedImage}
                    />
                  </LazyLoad>
                );
              })}
            </Column>
          );
        })}
      </Gallery>

      <ImageViewerDialog
        onClose={closeDialog}
        open={openedDialog}
        src={selectedImage.data}
        imgIdentifier={selectedImage.identifier}
      />
    </>
  );
};
