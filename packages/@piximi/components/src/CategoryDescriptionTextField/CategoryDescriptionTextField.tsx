import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

import styles from './CategoryDescriptionTextField.css';

const useStyles = makeStyles(styles);

type Props = {
  description: string;
  onDescriptionChange: (event: React.FormEvent<EventTarget>) => void;
};

/**
 *
 * @param props
 * @constructor
 */
const CategoryDescriptionTextField = (props: Props) => {
  const { description, onDescriptionChange } = props;

  const classes = useStyles({});

  const { t: translation } = useTranslation();

  const inputProps = {
    className: classes.input
  };

  return (
    <TextField
      autoFocus
      margin="dense"
      fullWidth
      id="description"
      inputProps={inputProps}
      label={translation('Description')}
      onChange={onDescriptionChange}
      type="text"
      value={description}
    />
  );
};

export default CategoryDescriptionTextField;
