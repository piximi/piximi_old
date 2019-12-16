import {connect} from "react-redux";
import {OpenProjectMenuItem} from "./OpenProjectMenuItem";
import {
  Category,
  Project,
  Image,
  FitOptions,
  CompileOptions
} from "@piximi/types";
import {Dispatch} from "redux";
import {openProject} from "@piximi/store";

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
    openClassifier: (
      categories: Category[],
      images: Image[],
      name: string,
      fitOptions: FitOptions,
      compileOptions: CompileOptions
    ) => {
      const payload = {
        categories: categories,
        images: images,
        name: name,
        fitOptions: fitOptions,
        compileOptions: compileOptions
      };

      const action = openProject(payload);

      dispatch(action);
    }
  };
};

export const ConnectedOpenProjectMenuItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenProjectMenuItem);
