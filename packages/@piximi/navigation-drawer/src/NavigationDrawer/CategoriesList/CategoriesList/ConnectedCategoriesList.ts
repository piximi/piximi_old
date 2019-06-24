import { connect } from 'react-redux';
import {
  toggleCategoryVisibilityAction,
  updateCategoryVisibilityAction
} from '@piximi/store';
import { Classifier } from '@piximi/types';
import { Dispatch } from 'redux';
import { CategoriesList } from './CategoriesList';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleVisibility: (identifier: string) => {
      const payload = { identifier: identifier };

      const action = toggleCategoryVisibilityAction(payload);

      dispatch(action);
    },
    updateVisibility: (identifier: string, visible: boolean) => {
      const payload = { identifier: identifier, visible: visible };

      const action = updateCategoryVisibilityAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedCategoriesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList);
