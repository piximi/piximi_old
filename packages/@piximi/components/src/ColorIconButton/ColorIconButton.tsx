import { Label } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { ColorIconMenu } from '..';
import styles from './ColorIconButton.css';
import { useMenu } from '@piximi/hooks';
import { Avatar, IconButton } from '@material-ui/core';

const useStyles = makeStyles(styles);

type ColorIconButtonProps = {
  color: string;
  colors: string[];
  onColorChange: (color: string) => void;
};

/**
 *
 * @param props
 * @constructor
 */
export const ColorIconButton = (props: ColorIconButtonProps) => {
  const { color, colors, onColorChange } = props;

  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const classes = useStyles({});

  return (
    <React.Fragment>
      <IconButton classes={{ root: classes.iconButton }} onClick={openMenu}>
        <Avatar classes={{ root: classes.avatar }}>
          <Label style={{ color: color }} />
        </Avatar>
      </IconButton>

      <ColorIconMenu
        anchorEl={anchorEl}
        closeMenu={closeMenu}
        color={color}
        colors={colors}
        onColorChange={onColorChange}
        openedMenu={openedMenu}
        openMenu={openMenu}
      />
    </React.Fragment>
  );
};
