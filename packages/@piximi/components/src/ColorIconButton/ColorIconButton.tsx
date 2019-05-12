import * as React from 'react';
import styles from './ColorIconButton.css';
import { makeStyles } from '@material-ui/styles';
import LabelIcon from '@material-ui/icons/Label';
import { useMenu } from '@cytoai/hooks';
import * as MaterialUI from '@material-ui/core';
import { ColorIconMenu } from "..";

const useStyles = makeStyles(styles);

type Props = {
  color: string;
  onColorChange: (color: string) => void;
};

const ColorIconButton = (props: Props) => {
  const { color, onColorChange } = props;

  const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

  const classes = useStyles();

  return (
    <React.Fragment>
      <MaterialUI.IconButton classes={{ root: classes.iconButton }} onClick={openMenu}>
        <MaterialUI.Avatar classes={{ root: classes.avatar }}>
          <LabelIcon style={{ color: color }} />
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

export default ColorIconButton;
