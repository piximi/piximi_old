import {connect} from "react-redux";
import {Project} from "@piximi/types";
import {Dispatch} from "redux";
import {openProjectAction} from "@piximi/store";
import {OpenExampleClassifierDialog} from "./OpenExampleClassifierDialog";

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
    openProject: async (project: Project) => {
      const payload = {project: project};

      const action = openProjectAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedOpenExampleClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenExampleClassifierDialog);
