import React from 'react';
import { ImageViewerDialog } from '../ImageViewerDialog';
import Image from '../Image/Image';
import { useDialog } from '@piximi/hooks';
import { ConnectedItemLabel } from '../GalleryItemLabel/ConnectedItemLabel';
import { ImageDragSource } from '@piximi/components';

type GalleryItemProps = {
  selectedItems: any;
  onmousedown: any;
  containerStyle: any;
  item: any;
};

export const GalleryItem = ({
  selectedItems,
  onmousedown,
  containerStyle,
  item
}: GalleryItemProps) => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const unselectedChannels: Array<any> = item.visualization.visibleChannels;

  return (
    <ImageDragSource
      selectedItems={selectedItems}
      onmousedown={onmousedown}
      item={item}
    >
      <ConnectedItemLabel image={item} />

      <Image
        key={'img' + item.identifier}
        id={item.identifier}
        openImageViewerDialog={openDialog}
        src={item.data}
        brightness={item.brightness}
        contrast={item.contrast}
        unselectedChannels={unselectedChannels}
        height={containerStyle.height}
        width={0.9 * containerStyle.width}
      />

      <ImageViewerDialog
        onClose={closeDialog}
        open={openedDialog}
        src={item.data}
        imgIdentifier={item.identifier}
        brightness={item.brightness}
      />
    </ImageDragSource>
  );
};
