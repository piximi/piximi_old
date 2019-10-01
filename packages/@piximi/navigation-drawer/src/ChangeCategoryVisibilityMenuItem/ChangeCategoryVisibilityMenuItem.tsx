import * as React from 'react';
import * as MaterialUI from '@material-ui/core';
import { Category } from '@piximi/types';

type ChangeCategoryVisibilityProps = {
  categoryProp: Category;
  closeMenu: () => void;
  makeCategoryInvisible: (
    categoryIdentifier: string,
    visibility: boolean
  ) => void;
};

export const ChangeCategoryVisibilityMenuItem = (
  props: ChangeCategoryVisibilityProps
) => {
  const { categoryProp, closeMenu, makeCategoryInvisible } = props;

  const categoryIsVisible = categoryProp.visualization.visible;

  const listItemText = categoryIsVisible ? 'Hide category' : 'Show category';

  const onClick = () => {
    closeMenu();
    makeCategoryInvisible(categoryProp.identifier, !categoryIsVisible);
  };

  return (
    <MaterialUI.MenuItem onClick={onClick}>
      <MaterialUI.ListItemText primary={listItemText} />
    </MaterialUI.MenuItem>
  );
};
