import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image, Partition } from '@piximi/types';
import { Item } from './Item';
import { Grid } from '@material-ui/core';
import { ImageViewerDialog } from '@piximi/image-dialog';

const data: string =
  'https://images.unsplash.com/photo-1528344227352-9a704db46536?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjk0ODE0fQ';

const image: Image = {
  categoryIdentifier: '',
  identifier: '1',
  data: data,
  checksum: '',
  partition: Partition.Training,
  scores: [],
  visualization: {
    brightness: 0,
    contrast: 0,
    visible: true,
    visibleChannels: []
  }
};

const selectedImage: Image = image;

const closeDialog = () => {};

const openDialog = () => {};

const openedDialog: boolean = false;

const setSelectedImage = () => {};

storiesOf('Item', module).add('example', () => {
  return (
    <>
      <Grid alignItems="center" container direction="row" justify="center">
        <Grid item xs={2}>
          <Item
            image={image}
            openDialog={openDialog}
            setSelectedImage={setSelectedImage}
          />
        </Grid>
      </Grid>

      <ImageViewerDialog
        onClose={closeDialog}
        open={openedDialog}
        src={selectedImage.data}
        imgIdentifier={selectedImage.identifier}
      />
    </>
  );
});
