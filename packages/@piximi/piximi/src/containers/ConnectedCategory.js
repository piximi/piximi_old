import { connect } from 'react-redux';
import _ from 'lodash';

import {
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction
} from '../actions/categories';
import Category from '../components/Category';

const mapStateToProps = (state, props) => {
  const index = _.findIndex(state.categories, function(category) {
    return category.identifier === props.identifier;
  });

  return state.categories[index];
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateCategoryDescription: event => {
      const identifier = props.identifier;

      const description = event.target.value;

      dispatch(updateCategoryDescriptionAction(identifier, description));
    },
    updateCategoryVisibility: () => {
      const identifier = props.identifier;

      dispatch(updateCategoryVisibilityAction(identifier));
    }
  };
};

const ConnectedCategory = connect(mapStateToProps, mapDispatchToProps)(
  Category
);

export default ConnectedCategory;
