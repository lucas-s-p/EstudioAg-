import './App.css';
import NavegadorNav from './Navegador/index';
import { Container } from './Header/headerStyle';
import ConteudoPrincipal from './ConteudoPrincipal';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <NavegadorNav/>
        <ConteudoPrincipal>
        </ConteudoPrincipal>
      </Container>
    </Router>
  );
}

export default App;
