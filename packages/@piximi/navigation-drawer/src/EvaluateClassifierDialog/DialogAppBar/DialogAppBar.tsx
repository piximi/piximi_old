import * as React from 'react';
import { ArrowBack, PlayCircleOutline } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Switch
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    button: {},
    grow: {
      flexGrow: 1
    },
    appBar: {
      position: 'relative',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    appBarShift: {},
    appBarShiftLeft: {}
  })
);

type DialogAppBarProps = {
  useCrossValidation: boolean;
  onUseCrossValidationChange: (event: React.FormEvent<EventTarget>) => void;
  closeDialog: () => void;
  evaluate: () => void;
  openedDrawer: boolean;
};

export const DialogAppBar = (props: DialogAppBarProps) => {
  const {
    closeDialog,
    evaluate,
    openedDrawer,
    useCrossValidation,
    onUseCrossValidationChange
  } = props;

  const classes = useStyles();

  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: openedDrawer,
        [classes.appBarShiftLeft]: openedDrawer
      })}
    >
      <Toolbar>
        <Tooltip title="Close Dialog" placement="bottom">
          <IconButton
            edge="start"
            color="primary"
            onClick={closeDialog}
            aria-label="Close"
            href={''}
          >
            <ArrowBack />
          </IconButton>
        </Tooltip>

        <Tooltip title="use cross validation" placement="bottom">
          <Switch
            checked={useCrossValidation}
            onChange={onUseCrossValidationChange}
          />
        </Tooltip>

        <Tooltip title="Evaluate the model" placement="bottom">
          <IconButton className={classes.button} onClick={evaluate} href={''}>
            <PlayCircleOutline />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
