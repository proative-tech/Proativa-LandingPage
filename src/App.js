import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Solution } from './components/Solution';
import { Marketplace } from './components/Marketplace';
import { Cases } from './components/Cases';


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Solution />
      <Marketplace />
      <Cases />
      <GlobalStyle />
    </>
  );
}

export default App;
 