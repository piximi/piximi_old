import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      marginTop: 0,
      width: '100%'
    },
    button: {
      padding: 0,
      margin: 0
    },
    icon: {
      padding: 0,
      margin: 0
    }
  })
);
