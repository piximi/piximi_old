import { createStyles } from '@material-ui/styles';

const drawerWidth = 280;

const styles = () =>
  createStyles({
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      width: '400px'
    }
  });

export default styles;
