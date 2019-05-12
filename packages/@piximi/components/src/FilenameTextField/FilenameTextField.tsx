import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';

import styles from './FilenameTextField.css';

const useStyles = makeStyles(styles);

type Props = {
  filename: string;
  onFilenameChange: (event: React.FormEvent<EventTarget>) => void;
};

const FilenameTextField = (props: Props) => {
  const { filename, onFilenameChange } = props;

  const classes = useStyles();

  const { t: translation } = useTranslation();

  const inputProps = {
    className: classes.input
  };

  return (
    <MaterialUI.TextField
      autoFocus
      margin="dense"
      fullWidth
      id="description"
      inputProps={inputProps}
      label={translation('Filename')}
      onChange={onFilenameChange}
      type="text"
      value={filename}
    />
  );
};

export default FilenameTextField;
