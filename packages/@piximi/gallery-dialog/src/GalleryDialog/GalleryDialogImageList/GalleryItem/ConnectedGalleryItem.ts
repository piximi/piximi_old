import {connect} from "react-redux";
import {GalleryItem} from "./GalleryItem";
import {updateImageCategory} from "@piximi/store";
import {Dispatch} from "redux";
import {Project} from "@piximi/types";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.project.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        categoryIdentifier: categoryIdentifier,
        identifier: identifier
      };

      const action = updateImageCategory(payload);

      dispatch(action);
    }
  };
};

export const ConnectedGalleryItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItem);
