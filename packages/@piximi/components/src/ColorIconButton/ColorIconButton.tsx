import { useMenu } from '@piximi/hooks';
import * as MaterialUI from '@material-ui/core';
import { Label } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

import { ColorIconMenu } from '..';
import styles from './ColorIconButton.css';

const useStyles = makeStyles(styles);

type Props = {
  color: string;
  onColorChange: (color: string) => void;
};

/**
 *
 * @param props
 * @constructor
 */
export const ColorIconButton = (props: Props) => {
  const { color, onColorChange } = props;

  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const classes = useStyles({});

  return (
    <React.Fragment>
      <MaterialUI.IconButton
        classes={{ root: classes.iconButton }}
        onClick={openMenu}
      >
        <MaterialUI.Avatar classes={{ root: classes.avatar }}>
          <Label style={{ color: color }} />
        </MaterialUI.Avatar>
      </MaterialUI.IconButton>

      <ColorIconMenu
        anchorEl={anchorEl}
        closeMenu={closeMenu}
        color={color}
        onColorChange={onColorChange}
        openedMenu={openedMenu}
        openMenu={openMenu}
      />
    </React.Fragment>
  );
};
