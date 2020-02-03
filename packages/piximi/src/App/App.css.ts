import {createStyles} from "@material-ui/core/styles";

const drawerWidth = 280;

export const styles = () =>
  createStyles({
    appFrame: {
      zIndex: 1,
      overflow: "hidden",
      display: "flex",
      width: "100%"
    },
    appBar: {
      backgroundColor: "rgba(0, 0, 0, 0) !important",
      borderBottom: "1px solid rgba(0, 0, 0, 0.12) !important",
      boxShadow: "none !important",
      zIndex: 10000
    },
    typography: {
      color: "rgba(0, 0, 0, 0.87)"
    }
  });
