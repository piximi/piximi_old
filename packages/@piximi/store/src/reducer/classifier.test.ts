import {
  createCategoryAction,
  createClassifierAction,
  openClassifierAction,
  createImageAction,
  createImagesAction,
  createImagesScoreAction,
  deleteCategoryAction,
  deleteImageAction,
  toggleCategoryVisibilityAction,
  updateCategoryColorAction,
  updateCategoryDescriptionAction,
  updateCategoryVisibilityAction,
  updateClassifierNameAction,
  updateImageBrightnessAction,
  updateImageCategoryAction,
  updateImagesCategoryAction,
  updateImageContrastAction,
  updateImageVisibilityAction
} from '../actions';
import { classifierReducer } from './classifier';
import { Category, Classifier, Image, Partition, Score } from '@piximi/types';

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
  const state: Classifier = {
    categories: [unknownCategory],
    images: [],
    name: 'Untitled classifier'
  };

  const category: Category = {
    description: 'example',
    identifier: '11111111-1111-1111-1111-11111111111',
    index: 1,
    visualization: {
      color: '#FFFFFF',
      visible: true
    }
  };

  const action = createCategoryAction(category);

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('createClassifierAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [],
    name: 'Untitled classifier'
  };

  const action = createClassifierAction('example');

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [],
    name: 'example'
  };

  expect(reducer).toEqual(expected);
});

it('openClassifierAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [],
    name: 'Untitled classifier'
  };

  const classifier: Classifier = {
    categories: [
      unknownCategory,
      {
        description: '1',
        identifier: '18be6295-dade-445e-a13f-e9f2268ac8e6',
        index: 0,
        visualization: {
          color: '#9c27b0',
          visible: true
        }
      },
      {
        description: '0',
        identifier: '789f08ed-fe80-4785-bdf6-0e7108ec29a3',
        index: 0,
        visualization: {
          color: '#00e676',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'example'
  };

  const action = openClassifierAction(classifier);

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: '1',
        identifier: '18be6295-dade-445e-a13f-e9f2268ac8e6',
        index: 0,
        visualization: {
          color: '#9c27b0',
          visible: true
        }
      },
      {
        description: '0',
        identifier: '789f08ed-fe80-4785-bdf6-0e7108ec29a3',
        index: 0,
        visualization: {
          color: '#00e676',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'example'
  };

  expect(reducer).toEqual(expected);
});

it('createImageAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [],
    name: 'Untitled classifier'
  };

  const image: Image = {
    categoryIdentifier: '00000000-0000-0000-0000-000000000000',
    checksum: '',
    data: '',
    identifier: '11111111-1111-1111-1111-11111111111',
    partition: Partition.Training,
    scores: [],
    visualization: {
      brightness: 0,
      contrast: 0,
      visible: true,
      visibleChannels: []
    }
  };

  const action = createImageAction(
    '11111111-1111-1111-1111-11111111111',
    image
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('createImagesAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const images: Image[] = [
    {
      categoryIdentifier: '00000000-0000-0000-0000-000000000000',
      checksum: '',
      data: '',
      identifier: '11111111-1111-1111-2222-11111111111',
      partition: Partition.Training,
      scores: [],
      visualization: {
        brightness: 0,
        contrast: 0,
        visible: true,
        visibleChannels: []
      }
    },
    {
      categoryIdentifier: '00000000-0000-0000-0000-000000000000',
      checksum: '',
      data: '',
      identifier: '11111111-1111-1111-333-11111111111',
      partition: Partition.Training,
      scores: [],
      visualization: {
        brightness: 0,
        contrast: 0,
        visible: true,
        visibleChannels: []
      }
    }
  ];

  const action = createImagesAction(images);

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-2222-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-333-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('createImageScoreAction', () => {
  const state: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-1111-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-2222-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-3333-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const scores: Array<Array<Score>> = [
    [
      {
        categoryIdentifier: '11111111-1111-1111-1111-11111111111',
        probability: 0.8
      }
    ],
    [
      {
        categoryIdentifier: '11111111-1111-1111-1111-11111111111',
        probability: 0.3
      }
    ]
  ];

  const identifiers = [
    '22222222-2222-2222-2222-22222222222',
    '22222222-2222-2222-3333-22222222222'
  ];

  const action = createImagesScoreAction(identifiers, scores);

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-1111-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-2222-22222222222',
        partition: Partition.Training,
        scores: [
          {
            categoryIdentifier: '11111111-1111-1111-1111-11111111111',
            probability: 0.8
          }
        ],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-3333-22222222222',
        partition: Partition.Training,
        scores: [
          {
            categoryIdentifier: '11111111-1111-1111-1111-11111111111',
            probability: 0.3
          }
        ],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('deleteCategoryAction', () => {
  const state: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '11111111-1111-1111-1111-11111111111',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-2222-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const action = deleteCategoryAction('11111111-1111-1111-1111-11111111111');

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-2222-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('deleteImageAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const action = deleteImageAction('11111111-1111-1111-1111-11111111111');

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('toggleCategoryVisibilityAction', () => {
  const state: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  const action = toggleCategoryVisibilityAction(
    '11111111-1111-1111-1111-11111111111'
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: false
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('updateCategoryColorAction', () => {
  const state: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  const action = updateCategoryColorAction(
    '11111111-1111-1111-1111-11111111111',
    '#000000'
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#000000',
          visible: true
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('updateCategoryDescriptionAction', () => {
  const state: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  const action = updateCategoryDescriptionAction(
    'updated',
    '11111111-1111-1111-1111-11111111111'
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'updated',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('updateCategoryVisibilityAction', () => {
  const state: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  const action = updateCategoryVisibilityAction(
    '11111111-1111-1111-1111-11111111111',
    false
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: false
        }
      }
    ],
    images: [],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('updateClassifierNameAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [],
    name: 'Untitled classifier'
  };

  const name: string = 'updated';

  const action = updateClassifierNameAction(name);

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [],
    name: 'updated'
  };

  expect(reducer).toEqual(expected);
});

it('updateImageBrightnessAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const action = updateImageBrightnessAction(
    1,
    '11111111-1111-1111-1111-11111111111'
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 1,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('updateImageCategoryAction', () => {
  const state: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-2222-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const action = updateImageCategoryAction(
    '11111111-1111-1111-1111-11111111111',
    '22222222-2222-2222-2222-22222222222'
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '11111111-1111-1111-1111-11111111111',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-2222-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('updateImagesCategoryAction', () => {
  const state: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-1111-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-2222-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-3333-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const identifiers = [
    '22222222-2222-2222-1111-22222222222',
    '22222222-2222-2222-2222-22222222222',
    '22222222-2222-2222-3333-22222222222'
  ];

  const action = updateImagesCategoryAction(
    '11111111-1111-1111-1111-11111111111',
    identifiers
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [
      unknownCategory,
      {
        description: 'example',
        identifier: '11111111-1111-1111-1111-11111111111',
        index: 1,
        visualization: {
          color: '#FFFFFF',
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: '11111111-1111-1111-1111-11111111111',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-1111-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '11111111-1111-1111-1111-11111111111',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-2222-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: '11111111-1111-1111-1111-11111111111',
        checksum: '',
        data: '',
        identifier: '22222222-2222-2222-3333-22222222222',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('updateImageContrastAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const action = updateImageContrastAction(
    1,
    '11111111-1111-1111-1111-11111111111'
  );

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 1,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});

it('updateImageVisibilityAction', () => {
  const state: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  const identifier: string = '11111111-1111-1111-1111-11111111111';

  const action = updateImageVisibilityAction(identifier, false);

  const reducer = classifierReducer(state, action);

  const expected: Classifier = {
    categories: [unknownCategory],
    images: [
      {
        categoryIdentifier: '00000000-0000-0000-0000-000000000000',
        checksum: '',
        data: '',
        identifier: '11111111-1111-1111-1111-11111111111',
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: false,
          visibleChannels: []
        }
      }
    ],
    name: 'Untitled classifier'
  };

  expect(reducer).toEqual(expected);
});
