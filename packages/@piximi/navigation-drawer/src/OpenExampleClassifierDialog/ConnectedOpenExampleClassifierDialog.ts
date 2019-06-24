import { connect } from 'react-redux';
import { Category, Classifier, Image } from '@piximi/types';
import { Dispatch } from 'redux';
import { openClassifierAction } from '@piximi/store';
import { OpenExampleClassifierDialog } from './OpenExampleClassifierDialog';

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
    openClassifier: async (
      categories: Category[],
      images: Image[],
      name: string
    ) => {
      const payload: Classifier = {
        categories: categories,
        images: images,
        name: name
      };

      const action = openClassifierAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedOpenExampleClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenExampleClassifierDialog);
