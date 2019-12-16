import {connect} from "react-redux";
import {GalleryDialog} from "./GalleryDialog";
import {Dispatch} from "redux";
import {Project} from "@piximi/types";
import {updateImageCategory} from "@piximi/store";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.project.categories,
    images: state.project.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        identifier: identifier,
        categoryIdentifier: categoryIdentifier
      };

      const action = updateImageCategory(payload);

      dispatch(action);
    }
  };
};

export const ConnectedGalleryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryDialog);
