import { Category } from '@piximi/types';
import * as actions from './classifier';

const unknownCategory: Category = {
  description: 'Unknown',
  identifier: '00000000-0000-0000-0000-000000000000',
  index: 0,
  visualization: {
    color: 'rgb(233, 165, 177)',
    visible: true
  }
};

it('createCategoryAction', () => {
  const category: Category = {
    description: 'example',
    identifier: '11111111-1111-1111-1111-11111111111',
    index: 1,
    visualization: {
      color: '#FFFFFF',
      visible: true
    }
  };

  const action = actions.createCategoryAction(category);

  expect(action.payload).toEqual({ category: category });
});
