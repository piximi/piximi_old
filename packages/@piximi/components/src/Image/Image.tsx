import * as React from 'react';

type ImageProps = {
  brightness: number;
  contrast: number;
  height: number;
  openImageViewerDialog: () => void;
  src: string;
  unselectedChannels?: number[];
  width: number;
};

/**
 *
 * @param props
 * @constructor
 */
export const Image = (props: ImageProps) => {
  const {
    brightness,
    contrast,
    height,
    openImageViewerDialog,
    src,
    unselectedChannels,
    width
  } = props;

  const [imageStatus, setImageStatus] = React.useState<string>('loading');
  const [image, setImage] = React.useState<HTMLImageElement>();
  const [imageHeight, setImageHeight] = React.useState<number>(0);
  const [imageWidth, setImageWidth] = React.useState<number>(0);

  let canvasRef = React.useRef<HTMLCanvasElement>(new HTMLCanvasElement());

  const onLoad = (e: any) => {
    const image: HTMLImageElement = e.target;

    const width: number = image.width;
    const height: number = image.height;

    setImageStatus('loaded');

    setImage(image);

    setImageHeight(height);

    setImageWidth(width);

    image.style.height = '0px';
  };

  React.useEffect(() => {
    if (imageStatus === 'loaded') {
      const canvas: HTMLCanvasElement = canvasRef.current;

      const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

      canvas.height = height * 0.9;

      canvas.width = width * 0.9;

      const ratio: number = Math.min(
        canvas.width / imageWidth,
        canvas.height / imageHeight
      );

      canvas.height = imageHeight * ratio;

      canvas.width = imageWidth * ratio;

      if (context) {
        context.filter = `brightness(${brightness}) contrast(${contrast})`;

        if (image) {
          context.drawImage(image, 0, 0, canvas.width, canvas.height);

          const imageData: ImageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );

          let data: Uint8ClampedArray = imageData.data;

          for (let i = 0; i < data.length; i += 4) {
            for (let j = 0; j < 4; j += 1) {
              if (unselectedChannels && unselectedChannels.includes(j)) {
                data[j + i] = 0;
              }
            }
          }

          context.putImageData(imageData, 0, 0);
        }
      }
    }
  });

  return (
    <React.Fragment>
      <canvas
        height={height}
        onDoubleClick={openImageViewerDialog}
        ref={canvasRef}
        style={{ verticalAlign: 'middle', padding: '2px' }}
        width={width}
      />

      <img
        alt="foo"
        onLoad={onLoad}
        src={src}
        style={{ visibility: 'hidden' }}
      />
    </React.Fragment>
  );
};

Image.defaultProps = {
  brightness: 100,
  contrast: 100,
  unselectedChannels: []
};
