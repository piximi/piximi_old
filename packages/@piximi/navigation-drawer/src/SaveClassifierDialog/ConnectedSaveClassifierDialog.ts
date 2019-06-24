import { connect } from 'react-redux';
import { Dispatch } from 'redux';
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export const ConnectedSaveClassifierDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveClassifierDialog);
