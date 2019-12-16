import {connect} from "react-redux";
import {updateImageVisibility} from "@piximi/store";
import {Dispatch} from "redux";
import {Project} from "@piximi/types";
import {GalleryDialogAppBar} from "./GalleryDialogAppBar";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.project.images,
    categories: state.project.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeImagesVisibility: (identifiers: string[], visibility: boolean) => {
      const payload = {
        identifiers: identifiers,
        visible: visibility
      };

      const action = updateImageVisibility(payload);

      dispatch(action);
    }
  };
};

export const ConnectedGalleryDialogAppBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryDialogAppBar);
