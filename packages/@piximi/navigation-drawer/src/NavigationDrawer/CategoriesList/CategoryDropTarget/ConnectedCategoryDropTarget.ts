import {connect} from "react-redux";
import {updateImagesCategory} from "@piximi/store";
import {Project} from "@piximi/types";
import {Dispatch} from "redux";
import {CategoryDropTarget} from "./CategoryDropTarget";

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
    updateImagesCategory: (
      identifiers: string[],
      categoryIdentifier: string
    ) => {
      const payload = {
        categoryIdentifier: categoryIdentifier,
        identifiers: identifiers
      };

      const action = updateImagesCategory(payload);

      dispatch(action);
    }
  };
};

export const ConnectedCategoryDropTarget = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDropTarget);
