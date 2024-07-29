import styled from '@emotion/styled';
import { APP_NAME } from '../consts';

const StyledApp = styled.div({
  backgroundColor: 'blue',
  padding: '1rem',
  textAlign: 'center',
  color: 'white',
  fontFamily: 'sans-serif',
});

export function App() {
  return (
    <StyledApp>
      Hello from <b>{APP_NAME}</b>
    </StyledApp>
  );
}

export default App;
