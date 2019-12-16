import {connect} from "react-redux";
import {DeleteImageDialog} from "./DeleteImageDialog";
import {deleteImage} from "@piximi/store";
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
    deleteImages: (identifiers: string[]) => {
      for (let identifier of identifiers) {
        const payload = {
          identifier: identifier
        };

        const action = deleteImage(payload);

        dispatch(action);
      }
    }
  };
};

export const ConnectedDeleteImageDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteImageDialog);
