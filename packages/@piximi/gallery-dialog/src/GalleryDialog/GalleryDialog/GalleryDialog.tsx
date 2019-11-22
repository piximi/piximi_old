import * as React from 'react';
import { SyntheticEvent, useState } from 'react';
import { GalleryCustomDragLayer } from '../GalleryCustomDragLayer/GalleryCustomDragLayer';
import { GalleryItems } from '../GalleryItems/GalleryItems';
import { GallerySelectionBox } from '../GallerySelectionBox/GallerySelectionBox';
import { collisionDetection } from '../utilities';
import { makeStyles } from '@material-ui/styles';
import { styles } from './GalleryDialog.css';
import { Category, Image } from '@piximi/types';

const useStyles = makeStyles(styles);

type GalleryDialogProps = {
  callOnDragEnd: () => void;
  images: Array<Image>;
  categories: Array<Category>;
  imagesPerRow: number;
  decreaseWidth: number;
  setSelectedImages: (identifiers: Array<string>) => void;
  selectedImages: Array<string>;
};

export const GalleryDialog = ({
  callOnDragEnd,
  images,
  categories,
  imagesPerRow = 10,
  decreaseWidth = 0,
  setSelectedImages,
  selectedImages
}: GalleryDialogProps) => {
  const classes = useStyles();

  const visibleCategories = categories
    .filter((category: Category) => category.visualization.visible)
    .map((category: Category) => category.identifier);

  const imageIsVisible = (image: Image) => {
    return (
      visibleCategories.includes(image.categoryIdentifier) &&
      image.visualization.visible
    );
  };

  let visibleImages: Array<Image>;

  if (images.length > 0) {
    visibleImages = images.filter((image: Image) => imageIsVisible(image));
  } else {
    visibleImages = images;
  }

  const [selected, setSelected] = useState<Array<any>>([]);

  const [collisions, setCollisions] = useState<Array<string>>([]);

  const [selectionBoxCoordinates, setSelectionBoxCoordinates] = React.useState({
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  });

  const [selectionBoxVisibility, setSelectionBoxVisibility] = React.useState(
    'hidden'
  );
  const [currentlyDraggedItem, setCurrentlyDraggedItem] = React.useState(null);
  const [shiftKeyPressed, setShiftKeyPressed] = React.useState(false);
  const [altKeyPressed, setAltKeyPressed] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    document.addEventListener('keydown', keyEvent);
    document.addEventListener('keyup', keyEvent);
    // @ts-ignore
    window.addEventListener('resize', windowResizeEvent);
  }, []);

  const onmousedown = (e: SyntheticEvent) => {
    let currentSelectionBoxCoordinates = {
      ...selectionBoxCoordinates
    };
    // @ts-ignore
    currentSelectionBoxCoordinates.x1 = e.clientX; //Set the initial X
    // @ts-ignore
    currentSelectionBoxCoordinates.y1 = e.clientY; //Set the initial Y
    // @ts-ignore
    currentSelectionBoxCoordinates.x2 = e.clientX; //Set the initial X
    // @ts-ignore
    currentSelectionBoxCoordinates.y2 = e.clientY; //Set the initial Y

    setMouseDown(true);
    setSelectionBoxCoordinates(currentSelectionBoxCoordinates);

    // Only activate selection box when not dragging on a selectable item
    // @ts-ignore
    if (e.target.getAttribute('type') !== 'selectableElement') {
      setSelectionBoxVisibility('visible');
    }
  };

  const onmousemove = (e: SyntheticEvent) => {
    // Always update coordinates based on mouse position
    let currentSelectionBoxCoordinates = {
      ...selectionBoxCoordinates
    };
    // @ts-ignore
    currentSelectionBoxCoordinates.x2 = e.clientX;
    // @ts-ignore
    currentSelectionBoxCoordinates.y2 = e.clientY;
    if (mouseDown) {
      setSelectionBoxCoordinates(currentSelectionBoxCoordinates);
    }
    // Only check for collisions if selection box is active
    if (selectionBoxVisibility === 'visible') {
      const collisions: Array<string> = collisionDetection(
        currentSelectionBoxCoordinates
      );
      // @ts-ignore
      setSelected(collisions);
      // @ts-ignore
      setCollisions(collisions);
      setSelectedImages(collisions);
    }
  };

  const onmouseup = (e: SyntheticEvent) => {
    // Check if no collisions occured and mouseup event is outside of a selectable item
    if (
      // @ts-ignore
      e.target.getAttribute('type') !== 'selectableElement' &&
      collisions.length === 0
    ) {
      // if so unselect all items
      setSelected([]);
      setSelectedImages([]);
    }
    // Hide selection box und reset collisions
    setMouseDown(false);
    setSelectionBoxVisibility('hidden');
    setCollisions([]);
  };

  const selectItem = (imgId: any) => {
    let selectedItems = [...selected];
    const noSelectedItems = selectedItems.length;
    // Check if clicked on an already selected item
    // @ts-ignore
    if (selectedItems.includes(imgId)) {
      return;
    }
    // Check if shiftkey is pressed
    if (shiftKeyPressed) {
      // @ts-ignore
      selectedItems.push(imgId);
    }
    // Check if alt keys is pressed
    else if (altKeyPressed) {
      // Select a range of images
      let selectOthers = false;
      const lastSelected = selectedItems[selectedItems.length - 1];
      for (let image of images) {
        if (image.identifier === imgId || image.identifier === lastSelected) {
          // @ts-ignore
          selectedItems.push(image.id);
          selectOthers = !selectOthers;
        }
        if (selectOthers && noSelectedItems !== 0) {
          // @ts-ignore
          selectedItems.push(image.id);
        }
      }
    }
    // No special key pressed
    else {
      // @ts-ignore
      selectedItems = [imgId];
    }
    // Set selected state
    setSelectedImages(selectedItems);
    setSelected(selectedItems);
  };

  const keyEvent = (e: {
    shiftKey: React.SetStateAction<boolean>;
    altKey: React.SetStateAction<boolean>;
  }) => {
    setShiftKeyPressed(e.shiftKey);
    setAltKeyPressed(e.altKey);
  };

  const windowResizeEvent = (e: {
    target: { innerWidth: React.SetStateAction<number> };
  }) => {
    setWindowWidth(e.target.innerWidth);
  };

  // Check if no images are visible or available
  if (!images || !images.length) {
    return null;
  }

  return (
    <div
      style={{ zIndex: 999, paddingTop: 60 }}
      className={[classes.container, classes.noselect, classes.root].join(' ')}
      onMouseDown={onmousedown}
      onMouseMove={onmousemove}
      onMouseUp={onmouseup}
    >
      <GalleryCustomDragLayer draggedItem={currentlyDraggedItem} />
      <GallerySelectionBox
        selectionBoxCoordinates={selectionBoxCoordinates}
        visibility={selectionBoxVisibility}
      />
      <GalleryItems
        images={visibleImages}
        imagesPerRow={imagesPerRow}
        windowWidth={windowWidth}
        decreaseWidth={decreaseWidth}
        selectItem={selectItem}
        selectedItems={selected}
        ondrag={setCurrentlyDraggedItem}
      />
    </div>
  );
};
