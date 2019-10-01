import { connect } from 'react-redux';
import { Classifier } from '@piximi/types';
import { EvaluateListItem } from './EvaluateListItem';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};

export const ConnectedEvaluateListItem = connect(mapStateToProps)(
  EvaluateListItem
);
