import { Profile } from './pages/Profile';
import { Container, GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Container>
        <Profile />
      </Container>
      
      <GlobalStyle />
    </>
  );
}

export default App;
