import * as React from "react";
import {OpenWeightsMenuItem} from "../OpenWeightsMenuItem";
import {OpenExampleClassifierMenuItem} from "../OpenExampleClassifierMenuItem";
import {Divider, MenuList, Paper, Popover} from "@material-ui/core";

type Props = {
  anchorEl: any;
  closeMenu: () => void;
  openedMenu: boolean;
};

export const OpenMenuList = (props: Props) => {
  const {anchorEl, closeMenu, openedMenu} = props;

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 3 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left + 14 : 0
  };

  return (
    // @ts-ignore
    <Popover
      anchorPosition={anchorPosition}
      anchorReference="anchorPosition"
      onClose={closeMenu}
      open={openedMenu}
    >
      // @ts-ignore
      <Paper>
        // @ts-ignore
        <MenuList dense>
          // @ts-ignore
          <ConnectedOpenClassifierMenuItem closeMenu={closeMenu} />
          <Divider />
          <OpenExampleClassifierMenuItem closeMenu={closeMenu} />
          <OpenWeightsMenuItem closeMenu={closeMenu} />
        </MenuList>
      </Paper>
    </Popover>
  );
};
