import {connect} from "react-redux";
import {GalleryItemCategoryMenu} from "./GalleryItemCategoryMenu";
import {updateImageCategory} from "@piximi/store";
import {Dispatch} from "redux";
import {Project} from "@piximi/types";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.project.categories
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

export const ConnectedGalleryItemCategoryMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItemCategoryMenu);
