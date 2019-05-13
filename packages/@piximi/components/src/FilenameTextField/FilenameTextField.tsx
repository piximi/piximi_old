import * as MaterialUI from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

import styles from './FilenameTextField.css';

const useStyles = makeStyles(styles);

type Props = {
  filename: string;
  onFilenameChange: (event: React.FormEvent<EventTarget>) => void;
};

/**
 *
 * @param props
 * @constructor
 */
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
      fullWidth
      id="description"
      inputProps={inputProps}
      label={translation('Filename')}
      margin="dense"
      onChange={onFilenameChange}
      type="text"
      value={filename}
    />
  );
};

export default FilenameTextField;
