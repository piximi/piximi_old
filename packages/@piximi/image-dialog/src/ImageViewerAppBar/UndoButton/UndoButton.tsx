import * as React from 'react';
import Button from '@material-ui/core/Button';

type UndoButtonProps = {
  identifier: any;
  images: any;
  setBrightness: any;
  setContrast: any;
};

export const UndoButton = (props: UndoButtonProps) => {
  const { identifier, images, setBrightness, setContrast } = props;

  const onUndoClick = () => {
    const initialBrightness = images[identifier].brightness;

    const initialContrast = images[identifier].contrast;

    setBrightness(initialBrightness);
    setContrast(initialContrast);
  };

  return <Button onClick={onUndoClick}>Undo</Button>;
};
