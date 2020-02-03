import {Theme} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/styles";

const styles = (theme: Theme) =>
  createStyles({
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dialogContent: {
      left: "240px",
      marginLeft: 240 + theme.spacing(2),
      marginTop: theme.spacing(8)
    }
  });

export const useStyles = makeStyles(styles);
