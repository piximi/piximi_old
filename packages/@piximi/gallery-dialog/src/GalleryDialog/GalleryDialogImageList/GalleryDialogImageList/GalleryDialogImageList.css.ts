import {createStyles} from "@material-ui/core/styles";
import {Theme} from "@material-ui/core";

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      paddingTop: "12px",
      paddingLeft: "12px",
      position: "fixed",
      zIndex: 1202,
      width: "100%",
      height: "95%"
    }
  });
