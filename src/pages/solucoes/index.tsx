import Head from 'next/head';
import { Header } from '../../components/Header';

import { Footer } from '../../components/Footer';
import { Container } from '../../styles/pages/Solutions';

import { HeroSolutions } from '../../components/SolutionsPart/Hero';
import { ServiceManaged } from '../../components/SolutionsPart/ServiceManaged';
import { Cybersecurity } from '../../components/SolutionsPart/Cybersecurity';
import { Professionals } from '../../components/SolutionsPart/Professionals';
import { Consultancy } from '../../components/SolutionsPart/Consultancy';
import { RPA } from '../../components/SolutionsPart/RPA';

export default function Index() {
  return (
    <>
      <Head>
        <title>Proative | Soluções</title>
      </Head>
      <Container>
        <Header noPaddingBottom bgColor="#fff" />
        <HeroSolutions
          idMoveScroll="soluciton-service"
          className="consultancyID"
        >
          <div className="content__text">
            <h1>
              Com uma equipe multidisciplinar entendemos as suas necessidades.
            </h1>
            <p style={{ maxWidth: 380 }}>
              Desenhamos soluções customizáveis e mais competitivas para
              serviços gerenciados de infraestrutura, aplicações, operações,
              processos de negócio, devops, segurança da informação, automação e
              melhor experiência e gestão para o espaço de trabalho digital com
              mais controle, menos risco e complexidade.
            </p>
          </div>
        </HeroSolutions>
        <ServiceManaged />
        <Consultancy />
        <Cybersecurity />
        <Professionals />
        <RPA />
      </Container>
      <Footer />
    </>
  );
}
