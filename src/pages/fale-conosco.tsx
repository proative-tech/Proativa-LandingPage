import { Header } from '../components/Header';
import { Container } from '../styles/pages/LandingPage';
import { Footer } from '../components/Footer';
import { Input } from '../components/Input';

export default function Index() {
  return (
    <>
      <Container>
        <Header />
        <div style={{ width: 250, margin: '0 auto' }}>
          <Input label="Nome:" name="nome" placeholder="ex: Mariana Camargo" />
        </div>
      </Container>
      <Footer />
    </>
  );
}
