import * as React from 'react';

import {
  HelpListItem,
  SendFeedbackListItem,
  SettingsListItem
} from '../../index';
import { List } from '@material-ui/core';

export const MiscellaneousList = () => {
  return (
    <List dense>
      <SettingsListItem />

      <SendFeedbackListItem />

      <HelpListItem />
    </List>
  );
};
