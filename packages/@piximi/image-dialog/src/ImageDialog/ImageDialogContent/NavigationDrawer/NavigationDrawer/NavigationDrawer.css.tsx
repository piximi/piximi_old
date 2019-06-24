import { createStyles } from '@material-ui/styles';

const drawerWidth = 280;

export const styles = () =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#202124'
    },
    content: {
      width: '400px'
    }
  });
