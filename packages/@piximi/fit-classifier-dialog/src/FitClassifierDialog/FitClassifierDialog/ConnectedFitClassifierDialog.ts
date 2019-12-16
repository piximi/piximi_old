import {connect} from "react-redux";
import {updateImagesPartition} from "@piximi/store";
import {Project} from "@piximi/types";
import {Dispatch} from "redux";
import {FitClassifierDialog} from "./FitClassifierDialog";

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
    setImagesPartition: (partitions: number[]) => {
      const payload = {partitions: partitions};

      const action = updateImagesPartition(payload);

      dispatch(action);
    }
  };
};

export const ConnectedFitClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(FitClassifierDialog);
