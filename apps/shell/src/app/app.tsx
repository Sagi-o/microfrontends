import styled from '@emotion/styled';
import { MfeLoader } from './mfe-loader';

const StyledApp = styled.div({
  padding: '1rem',
});

const Row = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
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
