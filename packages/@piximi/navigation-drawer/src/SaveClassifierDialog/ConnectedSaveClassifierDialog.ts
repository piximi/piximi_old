import { connect } from 'react-redux';
import { Classifier } from '@piximi/types';
import { SaveClassifierDialog } from './SaveClassifierDialog';

type State = {
  classifier: Classifier;
};

const mapStateToProps = (state: State) => {
  return {
    classifier: state.classifier
  };
};

export const ConnectedSaveClassifierDialog = connect(mapStateToProps)(
  SaveClassifierDialog
);
