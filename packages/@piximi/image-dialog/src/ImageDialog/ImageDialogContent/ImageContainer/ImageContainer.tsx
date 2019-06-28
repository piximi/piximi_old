import * as React from 'react';
import * as THREE from 'three';

type ImageProps = {
  data: string;
};

export const ImageContainer = (props: ImageProps) => {
  const { data } = props;

  const scene: THREE.Scene = new THREE.Scene();

  const map: THREE.Texture = new THREE.TextureLoader().load(data);

  const material: THREE.SpriteMaterial = new THREE.SpriteMaterial({ map: map });

  const sprite: THREE.Sprite = new THREE.Sprite(material);

  scene.add(sprite);

  const camera = new THREE.Camera();

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(300, 300);

  const element: HTMLDivElement = document.createElement('div');

  const ref = React.useRef<HTMLDivElement>(element);

  React.useEffect(() => {
    renderer.render(scene, camera);

    ref.current.appendChild(renderer.domElement);
  });

  return <div ref={ref} />;
};
