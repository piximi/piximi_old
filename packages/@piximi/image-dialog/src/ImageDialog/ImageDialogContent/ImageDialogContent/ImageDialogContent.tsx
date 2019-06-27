import * as React from 'react';
import { styles } from './ImageDialogContent.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

enum Status {
  Error,
  Loaded,
  Loading
}

const useImage = (
  src: string,
  crossOrigin?: string
): [HTMLImageElement, Status] => {
  const [image, setImage] = React.useState<HTMLImageElement>(
    document.createElement('img')
  );

  const [status, setStatus] = React.useState<Status>(Status.Loading);

  React.useEffect(() => {
    if (!src) return;

    const element = document.createElement('img');

    const onload = () => {
      setImage(element);
      setStatus(Status.Loaded);
    };

    const onerror = () => {
      setImage(document.createElement('img'));
      setStatus(Status.Error);
    };

    element.addEventListener('load', onload);

    element.addEventListener('error', onerror);

    crossOrigin && (element.crossOrigin = crossOrigin);

    element.src = src;

    return () => {
      element.removeEventListener('load', onload);

      element.removeEventListener('error', onerror);

      setImage(document.createElement('img'));
      setStatus(Status.Loading);
    };
  }, [src, crossOrigin]);

  return [image, status];
};

type ImageDialogContentProps = {
  data: string;
};

export const ImageDialogContent = (props: ImageDialogContentProps) => {
  const classes = useStyles({});

  const { data } = props;

  const [image] = useImage(data);

  const ref = React.useRef<HTMLCanvasElement>(document.createElement('canvas'));

  React.useLayoutEffect(() => {
    const context = ref.current.getContext('2d');

    context!.drawImage(image, image.naturalWidth, image.naturalHeight);
  });

  return (
    <div className={classes.root}>
      <canvas ref={ref} />
    </div>
  );
};
