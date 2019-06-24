import * as React from 'react';
import {
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popover
} from '@material-ui/core';
import { useDialog } from '@piximi/hooks';
import { ConnectedEditCategoryDialog } from '../../../../EditCategoryDialog/ConnectedEditCategoryDialog';
import { ConnectedDeleteCategoryDialog } from '../../../../DeleteCategoryDialog/ConnectedDeleteCategoryDialog';
import { Category } from '@piximi/types';

type CategoryListItemMenuListProps = {
  anchorEl: any;
  category: Category;
  categories: Category[];
  closeMenu: () => void;
  openedMenu: boolean;
};

export const CategoryListItemMenuList = (
  props: CategoryListItemMenuListProps
) => {
  const { anchorEl, category, closeMenu, openedMenu } = props;

  const {
    openedDialog: openedEditCategoryDialog,
    openDialog: openEditCategoryDialog,
    closeDialog: closeEditCategoryDialog
  } = useDialog();

  const {
    openedDialog: openedDeleteCategoryDialog,
    openDialog: openDeleteCategoryDialog,
    closeDialog: closeDeleteCategoryDialog
  } = useDialog();

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 10 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left : 0
  };

  const onHideOtherCategoriesClick = () => {
    closeMenu();
  };

  const onEditCategoryClick = () => {
    openEditCategoryDialog();

    closeMenu();
  };

  const onDeleteCategoryClick = () => {
    openDeleteCategoryDialog();

    closeMenu();
  };

  const known: boolean =
    category.identifier !== '00000000-0000-0000-0000-000000000000';

  return (
    <React.Fragment>
      <Popover
        anchorPosition={anchorPosition}
        anchorReference="anchorPosition"
        id="simple-popper"
        onClose={closeMenu}
        open={openedMenu}
      >
        <Paper>
          <MenuList dense>
            <MenuItem onClick={onHideOtherCategoriesClick}>
              <ListItemText primary="Hide other categories" />
            </MenuItem>

            {known && (
              <div>
                <MenuItem onClick={onEditCategoryClick}>
                  <ListItemText primary="Edit category" />
                </MenuItem>

                <MenuItem onClick={onDeleteCategoryClick}>
                  <ListItemText primary="Delete category" />
                </MenuItem>
              </div>
            )}
          </MenuList>
        </Paper>
      </Popover>

      <ConnectedEditCategoryDialog
        category={category}
        onClose={closeEditCategoryDialog}
        open={openedEditCategoryDialog}
      />

      <ConnectedDeleteCategoryDialog
        category={category}
        onClose={closeDeleteCategoryDialog}
        open={openedDeleteCategoryDialog}
      />
    </React.Fragment>
  );
};
