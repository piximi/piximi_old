import {connect} from "react-redux";
import {updateCategoryColor, updateCategoryDescription} from "@piximi/store";
import {Project} from "@piximi/types";
import {Dispatch} from "redux";
import {EditCategoryDialog} from "./EditCategoryDialog";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    project: state.project.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateColor: (identifier: string, color: string) => {
      const payload = {identifier: identifier, color: color};

      const action = updateCategoryColor(payload);

      dispatch(action);
    },
    updateDescription: (identifier: string, description: string) => {
      const payload = {identifier: identifier, description: description};

      const action = updateCategoryDescription(payload);

      dispatch(action);
    }
  };
};

export const ConnectedEditCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryDialog);
