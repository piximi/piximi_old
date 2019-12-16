import {connect} from "react-redux";
import {GalleryDialogImageList} from "./GalleryDialogImageList";
import {Classifier} from "@piximi/types";

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.classifier.images,
    categories: state.classifier.categories
  };
};

export const ConnectedGalleryDialogImageList = connect(mapStateToProps)(
  GalleryDialogImageList
);
