import * as React from 'react';

import {
  SaveAnnotationsAndPredictionsMenuItem,
  SaveClassifierMenuItem,
  SaveWeightsMenuItem
} from '../../../index';
import { Divider, MenuList, Paper, Popover } from '@material-ui/core';

type Props = {
  anchorEl: any;
  onClose: () => void;
  open: boolean;
};

export const SaveMenuList = (props: Props) => {
  const { anchorEl, onClose, open } = props;

  const anchorPosition = {
    top: open ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: open ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    <Popover
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
      onClose={onClose}
      open={open}
    >
      <Paper>
        <MenuList dense>
          <SaveClassifierMenuItem />

          <Divider />

          <SaveAnnotationsAndPredictionsMenuItem />

          <SaveWeightsMenuItem />
        </MenuList>
      </Paper>
    </Popover>
  );
};
