import { connect } from 'react-redux';
import { Classifier, Score } from '@piximi/types';
import { PredictListItem } from './PredictListItem';
import { createImagesScoreAction } from '@piximi/store';
import { Dispatch } from 'redux';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    classifier: state.classifier,
    images: state.classifier.images
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createImageScore: (identifiers: string[], scores: Score[][]) => {
      const payload = { identifiers: identifiers, scores: scores };

      const action = createImagesScoreAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedPredictListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(PredictListItem);
