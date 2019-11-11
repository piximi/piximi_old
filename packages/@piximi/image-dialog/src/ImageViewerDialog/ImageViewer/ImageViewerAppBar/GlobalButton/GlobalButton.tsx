import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PublicIcon from '@material-ui/icons/Public';

export const GlobalButton = () => {
  const onClick = () => {};

  return (
    <IconButton onClick={onClick}>
      <PublicIcon />
    </IconButton>
  );
};
