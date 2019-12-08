export type Category = {
  description: string;
  identifier: string;
  index: number;
  visualizationOptions: CategoryVisualizationOptions;
};

export type CategoryVisualizationOptions = {
  color: string;
  visible: boolean;
}
