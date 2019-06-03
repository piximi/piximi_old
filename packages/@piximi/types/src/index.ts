type Category = {
  description: string;
  identifier: string;
  index: number;
  scores: Score[];
  visualization: CategoryVisualization;
};

type CategoryVisualization = {
  color: string;
  identifier: string;
  visible: boolean;
}

type Classifier = {
  categories: string[];
  images: string[];
  name: string;
};

type Image = {
  categoryIdentifier: string;
  checksum: string;
  data: string;
  identifier: string;
  partition: Partition;
  scores: string[];
  visualization: ImageVisualization;
};

type ImageVisualization = {
  brightness: number;
  contrast: number;
  identifier: string;
  visible: boolean;
  visibleChannels: number[];
};

enum Partition {
  Training,
  Validation,
  Test
}

type Score = {
  categoryIdentifier: string;
  identifier: string;
  probability: number;
};

type Settings = {
  spinner: {
    spinning: boolean;
  };
};

export {
  Category,
  CategoryVisualization,
  Classifier,
  Image,
  ImageVisualization,
  Partition,
  Score,
  Settings
}
