import { default as React } from 'react';
import { Canvas } from 'react-three-fiber';
import { Image } from '../../index';

type ImageCanvasProps = {
  brightness?: number;
  contrast?: number;
  height: number;
  id?: any;
  openImageViewerDialog?: () => {};
  src: string;
  width: number;
  unselectedChannels?: any;
};

export const ImageCanvas = (props: ImageCanvasProps) => {
  const { src } = props;

  return (
    <Canvas>
      <Image src={src} />
    </Canvas>
  );
};
