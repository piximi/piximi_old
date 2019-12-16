import {connect} from "react-redux";
import {updateCategoryVisibility} from "@piximi/store";
import {ChangeCategoryVisibilityMenuItem} from "./ChangeCategoryVisibilityMenuItem";
import {Project} from "@piximi/types";
import {Dispatch} from "redux";

type State = {
  project: Project;
};

const mapStateToProps = (state: State) => {
  return {
    project: state.project
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    makeCategoryInvisible: (
      categoryIdentifier: string,
      visibility: boolean
    ) => {
      const payload = {identifier: categoryIdentifier, visible: visibility};
      const action = updateCategoryVisibility(payload);

      dispatch(action);
    }
  };
};

export const ConnectedChangeCategoryVisibilityMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeCategoryVisibilityMenuItem);
