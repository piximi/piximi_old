import {connect} from "react-redux";
import {GalleryDialog} from "./GalleryDialog";
import {Dispatch} from "redux";
import {Classifier} from "@piximi/types";
import {updateImageCategoryAction} from "@piximi/store";

type State = {
  classifier: Classifier;
  settings: any;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        identifier: identifier,
        categoryIdentifier: categoryIdentifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedGalleryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryDialog);
