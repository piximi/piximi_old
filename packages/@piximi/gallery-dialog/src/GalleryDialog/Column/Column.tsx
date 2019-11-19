import styled from '@emotion/styled';
import makeStyles from '@material-ui/core/styles/makeStyles';
import * as React from 'react';

type CProps = {
  numberOfColumns: number;
};

const useStyles = makeStyles({
  root: {
    flex: (props: CProps) => 100 / props.numberOfColumns + '%',
    maxWidth: (props: CProps) => (100 - 10) / props.numberOfColumns + '%',
    padding: '0 0.5em',
    '*': {
      marginTop: '1em',
      verticalAlign: 'middle',
      backgroundColor: 'red'
    },
    '@media (max-width: 600px)': {
      flex: '100%',
      maxWidth: '100%'
    },
    '@media (max-width: 800px)': {
      flex: '50%',
      maxWidth: '50%'
    }
  }
});

export const C = ({ numberOfColumns }: CProps) => {
  const classes = useStyles({ numberOfColumns });

  return <div className={classes.root} />;
};

export const Column = styled.div<{ numberOfColumns: number }>`
  flex: ${props => 100 / props.numberOfColumns + '%'};
  max-width: ${props => (100 - 10) / props.numberOfColumns + '%'};
  padding: 0 0.5em;
  * {
    margin-top: 0;
    vertical-align: middle;
  }
  @media (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
  @media (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }
`;
