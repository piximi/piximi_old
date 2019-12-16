import {connect} from "react-redux";
import {createProject} from "@piximi/store";
import {Project} from "@piximi/types";
import * as uuid from "uuid";
import {Dispatch} from "redux";
import {NewClassifierDialog} from "./NewClassifierDialog";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return state.project;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openClassifier: (name: string) => {
      const classifier = {
        identifier: uuid.v4(),
        name: name
      };

      const action = createProject(classifier);

      dispatch(action);
    }
  };
};

export const ConnectedNewClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewClassifierDialog);
