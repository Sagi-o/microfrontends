import styled from '@emotion/styled';
import { MfeLoader } from './mfe-loader';

const StyledApp = styled.div({
  padding: '0.5rem',
  fontFamily: 'sans-serif',
  border: '1px solid black',
});

const Row = styled.div({
  display: 'flex',
  justifyContent: 'stretch',
  columnGap: '0.5rem',
});

export function App() {
  return (
    <StyledApp>
      <h2>Shell App</h2>
      <Row>
        <MfeLoader appName="mfe1" />
        <MfeLoader appName="mfe2" />
      </Row>
    </StyledApp>
  );
}

export default App;
