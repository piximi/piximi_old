import { connect } from 'react-redux';
import {
  updateCategoryColorAction,
  updateCategoryDescriptionAction
} from '@piximi/store';
import { Classifier } from '@piximi/types';
import { Dispatch } from 'redux';
import { EditCategoryDialog } from './EditCategoryDialog';

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
    updateColor: (identifier: string, color: string) => {
      const payload = { identifier: identifier, color: color };

      const action = updateCategoryColorAction(payload);

      dispatch(action);
    },
    updateDescription: (identifier: string, description: string) => {
      const payload = { identifier: identifier, description: description };

      const action = updateCategoryDescriptionAction(payload);

      dispatch(action);
    }
  };
};

export const ConnectedEditCategoryDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoryDialog);
