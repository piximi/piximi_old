import {connect} from "react-redux";
import {toggleCategoryVisibility} from "@piximi/store";
import {Project} from "@piximi/types";
import {Dispatch} from "redux";
import {CategoryListItem} from "./CategoryListItem";

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
    }
  };
};

export const ConnectedCategoryListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListItem);
