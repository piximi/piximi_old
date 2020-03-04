import * as React from "react";
import {useStyles} from "./GalleryDialog.css";
import classNames from "classnames";
import {ConnectedGalleryDialogAppBar} from "../GalleryDialogAppBar";
import {ConnectedGalleryDialogImageList} from "../GalleryDialogImageList";
import {Category, Image} from "@piximi/types";
import Dialog from "@material-ui/core/Dialog";

type GalleryDialogProps = {
  onClose: () => void;
  open: boolean;
  openedDrawer: boolean;
  toggleDrawer: () => void;
  updateImageCategory: (image: Image, category: Category) => void;
};

export const GalleryDialog = ({
  onClose,
  open,
  openedDrawer,
  toggleDrawer,
  updateImageCategory
}: GalleryDialogProps) => {
  const classes = useStyles({});

  const [selectedImages, setSelectedImages] = React.useState([]);

  return (
    <Dialog
      className={classes.dialog}
      fullScreen
      onClose={onClose}
      open={open}
      style={{zIndex: 100}}
    >
      <div>
        <ConnectedGalleryDialogAppBar
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
          toggle={toggleDrawer}
          toggled={openedDrawer}
        />
        <main
          className={classNames(classes.content, classes.contentLeft, {
            [classes.contentShift]: openedDrawer,
            [classes.contentShiftLeft]: openedDrawer
          })}
        >
          <div className={classes.drawerHeader} />
          <ConnectedGalleryDialogImageList
            selectedImages={selectedImages}
            imagesPerRow={10}
            decreaseWidth={openedDrawer ? 280 + 24 : 24}
            callOnDragEnd={updateImageCategory}
            setSelectedImages={setSelectedImages}
          />
        </main>
      </div>
    </Dialog>
  );
};
