import * as React from 'react';
import Button from '@material-ui/core/Button';

type SaveButtonProps = {};

export const SaveButton = (props: SaveButtonProps) => {
  const onSaveClick = () => {};

  return <Button onClick={onSaveClick}>Save</Button>;
};
