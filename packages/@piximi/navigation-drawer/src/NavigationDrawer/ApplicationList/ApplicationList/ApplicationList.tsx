import * as React from 'react';
import { ConnectedOpenListItem } from '../OpenListItem/OpenListItem';
import { NewClassifierListItem } from '../NewClassifierListItem';
import { ConnectedSaveListItem } from '../SaveListItem/SaveListItem';
import { List } from '@material-ui/core';

export const ApplicationList = () => {
  return (
    <List dense>
      <NewClassifierListItem />

      <ConnectedOpenListItem />

      <ConnectedSaveListItem />
    </List>
  );
};
