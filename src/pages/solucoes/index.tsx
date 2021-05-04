import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../styles/pages/Solutions';

import { HeroSolutions } from '../../components/SolutionsPart/Hero';
import { ServiceManaged } from '../../components/SolutionsPart/ServiceManaged';
import { Cybersecurity } from '../../components/SolutionsPart/Cybersecurity';
import { Professionals } from '../../components/SolutionsPart/Professionals';
import { Consultancy } from '../../components/SolutionsPart/Consultancy';

export default function Index() {
  return (
    <>
      <Container>
        <Header />
        <HeroSolutions />
        <ServiceManaged />
        <Cybersecurity />
        <Professionals />
        <Consultancy />
      </Container>
      <Footer />
    </>
  );
}
