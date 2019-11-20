import { Theme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { createStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0
    },
    card: {
      marginTop: '1em',
      position: 'relative',
      '&:hover': {}
    },
    button: {
      color: 'red',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      marginTop: 0,
      // opacity: '0.25',
      backgroundColor: '#e8eaed'
      // transition: '.135s',
      // "&:hover": {
      //   cursor: 'pointer',
      //   opacity: '0.5'
      // }
    },
    icon: {
      padding: '0px'
    },
    image: {
      marginTop: 0,
      width: '100%'
    }
  })
);
