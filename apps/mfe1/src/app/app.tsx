import styled from '@emotion/styled';

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
      Hello from <b>mfe1</b>
    </StyledApp>
  );
}

export default App;
