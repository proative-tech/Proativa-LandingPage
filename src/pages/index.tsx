import Hero from '../components/LandingPart/Hero';
import { Header } from '../components/Header';
import { About } from '../components/LandingPart/About';
import { AboutTwo } from '../components/LandingPart/AboutTwo';
import { AboutThree } from '../components/LandingPart/AboutThree';
import { Informations } from '../components/LandingPart/Informations';
import { Container } from '../styles/pages/LandingPage';

export default function Index() {
  return (
    <Container>
      <Header />
      <Hero />
      <Informations />
      <About />
      <AboutTwo />
      <AboutThree />
    </Container>
  )
}
