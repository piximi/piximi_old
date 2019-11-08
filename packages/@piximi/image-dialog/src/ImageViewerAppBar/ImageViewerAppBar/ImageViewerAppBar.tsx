import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { UndoButton } from '../UndoButton';
import { SaveButton } from '../SaveButton';
import { BackButton } from '../BackButton';
import { GlobalButton } from '../GlobalButton';

type ImageViewerAppBarProps = {
  onClose: () => void;
};

export const ImageViewerAppBar = (props: ImageViewerAppBarProps) => {
  const { onClose } = props;

  return (
    <AppBar color="inherit" position="sticky">
      <Toolbar>
        <BackButton onClose={onClose} />

        <GlobalButton />

        <UndoButton />

        <SaveButton />
      </Toolbar>
    </AppBar>
  );
};
