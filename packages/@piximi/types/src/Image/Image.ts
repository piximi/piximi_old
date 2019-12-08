export type Image = {
  categoryIdentifier: string;
  checksum: string;
  data: string;
  identifier: string;
  partition: Partition;
  scores: Array<Score>;
  visualizationOptions: ImageVisualizationOptions;
};

export type ImageVisualizationOptions = {
  brightness: number;
  contrast: number;
  visible: boolean;
  visibleChannels: Array<number>;
};

export enum Partition {
  Training,
  Validation,
  Test
}

export type Score = {
  categoryIdentifier: string;
  probability: number;
};
