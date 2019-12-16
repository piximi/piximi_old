import {connect} from "react-redux";
import {
  toggleCategoryVisibility,
  updateCategoryVisibility
} from "@piximi/store";
import {Project} from "@piximi/types";
import {Dispatch} from "redux";
import {CategoriesList} from "./CategoriesList";

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
    toggleVisibility: (identifier: string) => {
      const payload = {identifier: identifier};

      const action = toggleCategoryVisibility(payload);

      dispatch(action);
    },
    updateVisibility: (identifier: string, visible: boolean) => {
      const payload = {identifier: identifier, visible: visible};

      const action = updateCategoryVisibility(payload);

      dispatch(action);
    }
  };
};

export const ConnectedCategoriesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList);
