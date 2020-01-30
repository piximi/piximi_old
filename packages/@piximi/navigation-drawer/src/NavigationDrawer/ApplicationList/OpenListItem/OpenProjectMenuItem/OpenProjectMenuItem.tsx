import * as React from "react";
import {ListItemText, MenuItem} from "@material-ui/core";
import {Project} from "@piximi/types";

type OpenProjectMenuItemProps = {
  closeMenu: () => void;
  openProject: (project: Project) => void;
};

export const OpenProjectMenuItem = (props: OpenProjectMenuItemProps) => {
  const {closeMenu, openProject} = props;

  const onChange = (e: any) => {
    const reader = new FileReader();

    reader.readAsText(e.target.files[0], "UTF-8");

    reader.onload = (e) => {
      const target = e.target as FileReader;

      const project = JSON.parse(target.result as string) as Project;

      openProject(project);
    };
    closeMenu();
  };

  return (
    <React.Fragment>
      <input
        accept=".piximi"
        id="open-classifier"
        name="file"
        onChange={onChange}
        style={{display: "none"}}
        type="file"
      />

      <label htmlFor="open-project">
        <MenuItem>
          <ListItemText primary="Open project" />
        </MenuItem>
      </label>
    </React.Fragment>
  );
};
