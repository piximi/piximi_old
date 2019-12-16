import {connect} from "react-redux";
import {DeleteCategoryDialog} from "./DeleteCategoryDialog";
import {deleteCategory} from "@piximi/store";
import {Project} from "@piximi/types";
import {Dispatch} from "redux";

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
    deleteCategory: (identifier: string) => {
      const payload = {
        identifier: identifier
      };

      const action = deleteCategory(payload);

      dispatch(action);
    }
  };
};

export const ConnectedDeleteCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategoryDialog);
