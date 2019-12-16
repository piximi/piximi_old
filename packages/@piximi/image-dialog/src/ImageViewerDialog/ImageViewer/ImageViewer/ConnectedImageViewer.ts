import {connect} from "react-redux";
import {ImageViewer} from "./ImageViewer";
import {updateImageBrightness, updateImageContrast} from "@piximi/store";
import {Dispatch} from "redux";
import {Project, Image} from "@piximi/types";

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
    saveEdits: (identifier: string, brightness: number, contrast: number) => {
      const brightnessPayload = {
        identifier: identifier,
        brightness: brightness
      };

      const brightnessAction = updateImageBrightness(brightnessPayload);

      dispatch(brightnessAction);

      const contrastPayload = {
        identifier: identifier,
        contrast: contrast
      };

      const contrastAction = updateImageContrast(contrastPayload);

      dispatch(contrastAction);
    },
    saveEditsGlobally: (
      images: Image[],
      brightness: number,
      contrast: number
    ) => {
      for (let image of images) {
        const brightnessPayload = {
          identifier: image.identifier,
          brightness: brightness
        };

        const brightnessAction = updateImageBrightness(brightnessPayload);

        dispatch(brightnessAction);

        const contrastPayload = {
          identifier: image.identifier,
          contrast: contrast
        };

        const contrastAction = updateImageContrast(contrastPayload);

        dispatch(contrastAction);
      }
    }
  };
};

export const ConnectedImageViewer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageViewer);
