import * as React from 'react';
import styles from './ColorIconMenu.css';
import { makeStyles } from '@material-ui/styles';
import LabelIcon from '@material-ui/icons/Label';
import { useMenu } from '@cytoai/hooks';
import { ColorPicker } from '..';
import * as MaterialUI from '@material-ui/core';
import { PopoverOrigin } from "@material-ui/core/Popover";

const useStyles = makeStyles(styles);

type Props = {
  anchorEl: any;
  closeMenu: any;
  color: string;
  onColorChange: (color: string) => void;
  openedMenu: boolean;
  openMenu: any;
};

const ColorIconMenu = (props: Props) => {
  const {
    anchorEl,
    closeMenu,
    color,
    onColorChange,
    openedMenu,
    openMenu
  } = props;

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
        <ColorPicker onChange={onChange} categories={[]}/>
      </div>
    </MaterialUI.Popover>
  );
};

export default ColorIconMenu;
