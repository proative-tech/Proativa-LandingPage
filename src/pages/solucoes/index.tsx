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
        <HeroSolutions>
          <div className="content__text">
            <h1>
              Soluções Proative para gerenciamento de sistemas e segurança da
              informação.
            </h1>
            <p>
              Nossa equipe é especializada em diversas plataformas tecnológicas
              e segmentos de mercado, possibilitando uma visualização mais ampla
              do seu negócio e suas reais necessidades, a fim de oferecer uma
              solução customizável e mais competitiva.
            </p>
          </div>
        </HeroSolutions>
        <ServiceManaged />
        <Cybersecurity />
        <Professionals />
        <Consultancy />
      </Container>
      <Footer />
    </>
  );
}
