import * as React from 'react';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import * as imagejs from 'image-js';

type ImageProps = {
  channels: { r: boolean; g: boolean; b: boolean };
  image: imagejs.Image;
};

export const Image = (props: ImageProps) => {
  const { channels, image } = props;

  const ref = useRef();

  const texture = useMemo(() => {
    return new THREE.TextureLoader().load(image.toDataURL());
  }, [image]);

  return (
    <mesh ref={ref} scale={[1.0, 1.0, 1.0]}>
      <planeBufferGeometry attach="geometry" args={[5.0, 5.0]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};
