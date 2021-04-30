import { Header } from '../components/Header';
import Hero from '../components/LandingPart/Hero';
import { Informations } from '../components/LandingPart/Informations';
import { Container } from '../styles/pages/LandingPage';

export default function Index() {
  return (
    <Container>
      <Header />
      <Hero />
      <Informations />
    </Container>
  )
}
