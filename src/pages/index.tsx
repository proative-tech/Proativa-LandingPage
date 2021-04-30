import { Header } from '../components/Header';
import Hero from '../components/LandingPart/Hero';
import { Container } from '../styles/pages/LandingPage';

export default function Index() {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  )
}
