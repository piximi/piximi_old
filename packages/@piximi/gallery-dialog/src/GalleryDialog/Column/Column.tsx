import styled from '@emotion/styled';

export const Column = styled.div<{ numberOfColumns: number }>`
  flex: ${props => 100 / props.numberOfColumns + '%'};
  max-width: ${props => (100 - 10) / props.numberOfColumns + '%'};
  padding: 0 0.5em;
  * {
    margin-top: 1em;
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
