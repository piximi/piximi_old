import * as React from 'react';
import { ListItemText, MenuItem } from '@material-ui/core';

export const OpenClassifierMenuItem = (props: any) => {
  const { closeMenu, openClassifier } = props;

  const onChange = (e: any) => {
    const reader = new FileReader();

    reader.readAsText(e.target.files[0], 'UTF-8');

    reader.onload = e => {
      const target = e.target as FileReader;

      const classifier = JSON.parse(target.result as string);

      openClassifier(classifier.categories, classifier.images, classifier.name);
    };
  };

  const onClick = () => {
    closeMenu();
  };

  return (
    <React.Fragment>
      <input
        accept=".piximi"
        id="open-classifier"
        name="file"
        onChange={onChange}
        style={{ display: 'none' }}
        type="file"
      />

      <label htmlFor="open-classifier">
        <MenuItem onClick={onClick}>
          <ListItemText primary="Open classifier" />
        </MenuItem>
      </label>
    </React.Fragment>
  );
};
