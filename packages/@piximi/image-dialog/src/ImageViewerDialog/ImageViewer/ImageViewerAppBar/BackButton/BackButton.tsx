import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

type BackButtonProps = {
  onClose: () => void;
};

export const BackButton = (props: BackButtonProps) => {
  const { onClose } = props;

  return (
    <IconButton onClick={onClose}>
      <ArrowBackIcon />
    </IconButton>
  );
};
