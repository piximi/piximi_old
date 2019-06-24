import { connect } from 'react-redux';
import { updateImageCategoryAction } from '@piximi/store';
import { Classifier } from '@piximi/types';
import { Dispatch } from 'redux';
import { CategoryDropTarget } from './CategoryDropTarget';

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
    updateImageCategory: (identifier: string, categoryIdentifier: string) => {
      const payload = {
        categoryIdentifier: categoryIdentifier,
        identifier: identifier
      };

      const action = updateImageCategoryAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedCategoryDropTarget = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDropTarget);
