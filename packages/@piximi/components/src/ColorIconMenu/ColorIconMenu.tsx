import * as MaterialUI from '@material-ui/core';
import { PopoverOrigin } from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

import { ColorPicker } from '..';
import styles from './ColorIconMenu.css';

const useStyles = makeStyles(styles);

type Props = {
  anchorEl: null | Element | ((element: Element) => Element);
  closeMenu: any;
  color: string;
  colors: string[];
  onColorChange: (color: string) => void;
  openedMenu: boolean;
  openMenu: any;
};

/**
 *
 * @param props
 * @constructor
 */
export const ColorIconMenu = (props: Props) => {
  const { anchorEl, closeMenu, colors, onColorChange, openedMenu } = props;

  const classes = useStyles({});

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
        <ColorPicker categories={[]} colors={colors} onChange={onChange} />
      </div>
    </MaterialUI.Popover>
  );
};
