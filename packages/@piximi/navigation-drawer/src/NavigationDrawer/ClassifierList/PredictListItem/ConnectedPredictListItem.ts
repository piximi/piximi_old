import {connect} from "react-redux";
import {Project, Score} from "@piximi/types";
import {PredictListItem} from "./PredictListItem";
import {createImageScore} from "@piximi/store";
import {Dispatch} from "redux";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.project.categories,
    classifier: state.project,
    images: state.project.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createImageScore: (identifiers: string[], scores: Score[][]) => {
      const payload = {identifiers: identifiers, scores: scores};

      const action = createImageScore(payload);

      dispatch(action);
    }
  };
};

export const ConnectedPredictListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(PredictListItem);
