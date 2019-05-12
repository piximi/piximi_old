import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import * as MaterialUI from '@material-ui/core';
import { PopoverOrigin } from '@material-ui/core/Popover';

import { ColorPicker } from '..';
import styles from './ColorIconMenu.css';

const useStyles = makeStyles(styles);

type Props = {
  anchorEl: any;
  closeMenu: any;
  onColorChange: (color: string) => void;
  openedMenu: boolean;
};

const ColorIconMenu = (props: Props) => {
  const { anchorEl, closeMenu, onColorChange, openedMenu } = props;

  const classes = useStyles();

  const onChange = (color: string) => {
    onColorChange(color);

    closeMenu();
  };

  const anchorOrigin: PopoverOrigin = {
    horizontal: 'center',
    vertical: 'bottom'
  };

  const transformOrigin: PopoverOrigin = {
    horizontal: 'center',
    vertical: 'top'
  };

  return (
    <MaterialUI.Popover
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      onClose={closeMenu}
      open={openedMenu}
      transformOrigin={transformOrigin}
    >
      <div className={classes.colorPicker}>
        <ColorPicker onChange={onChange} categories={[]} />
      </div>
    </MaterialUI.Popover>
  );
};

export default ColorIconMenu;
