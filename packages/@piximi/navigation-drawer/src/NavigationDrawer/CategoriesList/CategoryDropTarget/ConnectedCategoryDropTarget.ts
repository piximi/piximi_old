import { connect } from 'react-redux';
import { updateImagesCategoryAction } from '@piximi/store';
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
    updateImagesCategory: (
      identifiers: string[],
      categoryIdentifier: string
    ) => {
      const payload = {
        categoryIdentifier: categoryIdentifier,
        identifiers: identifiers
      };

      const action = updateImagesCategoryAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedCategoryDropTarget = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDropTarget);
