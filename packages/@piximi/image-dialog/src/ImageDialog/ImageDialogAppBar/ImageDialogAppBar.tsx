import * as React from 'react';
import { styles } from './ImageDialogAppBar.css';
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Tooltip
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type ImageDialogAppBarProps = {
  onClose: () => void;
};

export const ImageDialogAppBar = (props: ImageDialogAppBarProps) => {
  const classes = useStyles({});

  const [applySettingsGlobally, setApplySettingsGlobally] = React.useState(
    false
  );

  const onGlobalClick = () => {};

  const onSaveClick = () => {};

  const onUndoClick = () => {};

  const { onClose } = props;

  return (
    <AppBar position="static" color="inherit" className={classes.appbar}>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={onClose}
        >
          <ArrowBackIcon />
        </IconButton>

        <Tooltip title="Apply settings globally">
          <IconButton
            onClick={onGlobalClick}
            className={
              applySettingsGlobally ? classes.globalButton : classes.menuButton
            }
            color="inherit"
            aria-label="Menu"
          >
            <PublicIcon />
          </IconButton>
        </Tooltip>

        <Button
          variant="contained"
          className={classes.undoButton}
          onClick={onUndoClick}
        >
          Undo
        </Button>

        <Button
          variant="contained"
          className={classes.saveButton}
          onClick={onSaveClick}
        >
          Save
        </Button>
      </Toolbar>
    </AppBar>
  );
};
