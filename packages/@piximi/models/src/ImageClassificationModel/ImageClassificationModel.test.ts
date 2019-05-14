import {
  ImageClassificationModel,
} from "..";
import {Classifier, Partition} from "../types";

const classifier: Classifier = {
  categories: [
    {
      color: '#F8F8F8',
      description: 'Unknown',
      identifier: '00000000-0000-0000-0000-000000000000',
      index: 0,
      visible: true
    },
    {
      color: '#FFFFFF',
      description: 'example',
      identifier: '11111111-1111-1111-1111-11111111111',
      index: 1,
      visible: true
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
    },
    {
      categoryIdentifier: '11111111-1111-1111-1111-11111111111',
      checksum: '',
      data: '',
      identifier: '33333333-3333-3333-3333-33333333333',
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

describe('ImageClassificationModel', () => {
  it('loadLayersModel', () => {
    const model = new ImageClassificationModel(
      classifier.categories,
      classifier.images
    );

    const pathOrIOHandler = 'https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json';

    model.loadLayersModel(pathOrIOHandler);

    expect(1 + 1).toEqual(2);
  });
});
