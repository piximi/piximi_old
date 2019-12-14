import * as React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import AddIcon from "@material-ui/icons/Add";

export const OpenExampleClassifierListItem = (props: any) => {
  const {t: translation} = useTranslation();

  const {onClick, primary, secondary, src} = props;

  return (
    <ListItem button onClick={onClick}>
      // @ts-ignore
      <ListItemAvatar>
        <Avatar src={src}>
          <AddIcon />
        </Avatar>
      </ListItemAvatar>
      // @ts-ignore
      <ListItemText
        primary={translation(primary)}
        secondary={translation(secondary)}
      />
    </ListItem>
  );
};
