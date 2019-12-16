import {connect} from "react-redux";
import {createCategory, createImage} from "@piximi/store";
import {Dispatch} from "redux";
import {Project} from "@piximi/types";
import {OpenListItem} from "./OpenListItem";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    images: state.project.images,
    categories: state.project.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateStore: (data: {images: any; categories: any}) => {
      for (let image of data.images) {
        const payload = {
          image: image
        };

        const action = createImage(payload);

        dispatch(action);
      }

      for (let category of data.categories) {
        const payload = {
          category: category
        };

        const action = createCategory(payload);

        dispatch(action);
      }
    }
  };
};

export const ConnectedOpenListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenListItem);
