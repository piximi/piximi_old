import * as React from 'react';
import './Gallery.css';
import { GalleryCustomDragLayer, GalleryItems, GallerySelectionBox } from '..';

const collisionWithRectangle = (
  rectangle1: { x: any; y: any; width: any; height: any },
  rectangle2: any
) => {
  // Check if two rectangles overlap
  return !!(
    rectangle1.x < rectangle2.x + rectangle2.width &&
    rectangle1.x + rectangle1.width > rectangle2.x &&
    rectangle1.y < rectangle2.y + rectangle2.height &&
    rectangle1.y + rectangle1.height > rectangle2.y
  );
};

const reCalcWithoutPixelString = (mousePosition: {
  x1: any;
  x2: any;
  y1: any;
  y2: any;
}) => {
  let x3 = Math.min(mousePosition.x1, mousePosition.x2); //Smaller X
  let x4 = Math.max(mousePosition.x1, mousePosition.x2); //Larger X
  let y3 = Math.min(mousePosition.y1, mousePosition.y2); //Smaller Y
  let y4 = Math.max(mousePosition.y1, mousePosition.y2); //Larger Y
  let left = x3;
  let top = y3;
  let width = x4 - x3;
  let height = y4 - y3;
  return { x: left, y: top, width: width, height: height };
};

const collisionDetection = (mousePosition: {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}) => {
  // Check if any selectable item is overlapping with mouse selection box
  const rectangle1 = reCalcWithoutPixelString(mousePosition);
  const elements = document.getElementsByTagName('canvas'); // Check collisions with selectable elements
  let collisions = [];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const rectangle2 = element.getBoundingClientRect();
    const imageId = element.getAttribute('imgid');
    const collisionDetected = collisionWithRectangle(rectangle1, rectangle2);
    if (collisionDetected) {
      collisions.push(imageId);
    }
  }
  return collisions;
};

const reCalc = (mousePosition: {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}) => {
  // Calculate rectangle position
  let x3 = Math.min(mousePosition.x1, mousePosition.x2); //Smaller X
  let x4 = Math.max(mousePosition.x1, mousePosition.x2); //Larger X
  let y3 = Math.min(mousePosition.y1, mousePosition.y2); //Smaller Y
  let y4 = Math.max(mousePosition.y1, mousePosition.y2); //Larger Y
  let left = x3 + 'px';
  let top = y3 + 'px';
  let width = x4 - x3 + 'px';
  let height = y4 - y3 + 'px';
  return { left: left, top: top, width: width, height: height };
};

type GalleryProps = {
  images: any[];
  categories: any[];
  imagesPerRow: any;
  decreaseWidth: any;
};

export const GalleryDialog = (props: GalleryProps) => {
  const { images, categories, imagesPerRow, decreaseWidth } = props;

  const visibleCategories = categories
    .filter(category => category.visualization.visible)
    .map(category => category.identifier);

  const imageIsVisible = (image: any) => {
    return (
      visibleCategories.includes(image.categoryIdentifier) &&
      image.visualization.visible
    );
  };

  const visibleImages =
    images.length > 0 ? images.filter(image => imageIsVisible(image)) : images;

  const [selected, setSelected] = React.useState([]);
  const [collisions, setCollisions] = React.useState([]);
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
    window.addEventListener('resize', windowResizeEvent);
  }, []);

  const onmousedown = (e: {
    clientX: number;
    clientY: number;
    target: { getAttribute: (arg0: string) => string };
  }) => {
    let currentSelectionBoxCoordinates = {
      ...selectionBoxCoordinates
    };
    currentSelectionBoxCoordinates.x1 = e.clientX; //Set the initial X
    currentSelectionBoxCoordinates.y1 = e.clientY; //Set the initial Y
    currentSelectionBoxCoordinates.x2 = e.clientX; //Set the initial X
    currentSelectionBoxCoordinates.y2 = e.clientY; //Set the initial Y

    setMouseDown(true);
    setSelectionBoxCoordinates(currentSelectionBoxCoordinates);

    // Only activate selection box when not dragging on a selectable item
    if (e.target.getAttribute('type') !== 'selectableElement') {
      setSelectionBoxVisibility('visible');
    }
  };

  const onmousemove = (e: { clientX: number; clientY: number }) => {
    // Always update coordinates based on mouse position
    let currentSelectionBoxCoordinates = {
      ...selectionBoxCoordinates
    };
    currentSelectionBoxCoordinates.x2 = e.clientX;
    currentSelectionBoxCoordinates.y2 = e.clientY;
    if (mouseDown) {
      setSelectionBoxCoordinates(currentSelectionBoxCoordinates);
    }
    // Only check for collisions if selection box is active
    if (selectionBoxVisibility === 'visible') {
      const collisions = collisionDetection(currentSelectionBoxCoordinates);
      setSelected(collisions);
      setCollisions(collisions);
      props.setSelectedImages(collisions);
    }
  };

  const onmouseup = (e: {
    target: { getAttribute: (arg0: string) => string };
  }) => {
    // Check if no collisions occured and mouseup event is outside of a selectable item
    if (
      e.target.getAttribute('type') !== 'selectableElement' &&
      collisions.length === 0
    ) {
      // if so unselect all items
      setSelected([]);
      props.setSelectedImages([]);
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
    if (selectedItems.includes(imgId)) {
      return;
    }
    // Check if shiftkey is pressed
    if (shiftKeyPressed) {
      selectedItems.push(imgId);
    }
    // Check if alt keys is pressed
    else if (altKeyPressed) {
      // Select a range of images
      let selectOthers = false;
      const lastSelected = selectedItems[selectedItems.length - 1];
      for (let image of props.images) {
        if (image.id === imgId || image.id === lastSelected) {
          selectedItems.push(image.id);
          selectOthers = !selectOthers;
        }
        if (selectOthers && noSelectedItems !== 0) selectedItems.push(image.id);
      }
    }
    // No special key pressed
    else {
      selectedItems = [imgId];
    }
    // Set selected state
    props.setSelectedImages(selectedItems);
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
      className="container noselect"
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

GalleryDialog.defaultProps = {
  decreaseWidth: 0,
  imagesPerRow: 10
};
