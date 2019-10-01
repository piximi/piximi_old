import { connect } from 'react-redux';
import { Classifier } from '@piximi/types';
import { FitListItem } from './FitListItem';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    categories: state.classifier.categories,
    images: state.classifier.images
  };
};

export const ConnectedFitListItem = connect(mapStateToProps)(FitListItem);
