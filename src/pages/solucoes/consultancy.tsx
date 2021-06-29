import { animateScroll } from 'react-scroll';
import Head from 'next/head';
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../styles/pages/Solutions';

import { HeroSolutions } from '../../components/SolutionsPart/Hero';
import { ServiceManaged } from '../../components/SolutionsPart/ServiceManaged';
import { Cybersecurity } from '../../components/SolutionsPart/Cybersecurity';
import { Professionals } from '../../components/SolutionsPart/Professionals';
import { Consultancy } from '../../components/SolutionsPart/Consultancy';
import { ContainerInfosOne } from '../../components/SolutionsPart/ConteinerInfosOne';
import { ContainerInfosTwo } from '../../components/SolutionsPart/ConteinerInfosTwo';
import { ContainerConsultoria } from '../../components/SolutionsPart/ContainerConsultoria';
import { ContainerImpulse } from '../../components/SolutionsPart/ContainerImpulse';
import { ContainerEscritorio } from '../../components/SolutionsPart/ContainerEscritorio';

export default function Index() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Proative | Soluções - Cybersecutiry</title>
      </Head>
      <Container>
        <Header bgColor="#fff" />
        <HeroSolutions idMoveScroll="containerConsultancy">
          <div className="content__text">
            <h2>
              Consulting Services: <br />
              Faça da TI um impulsionador de crescimento.
            </h2>
            <p>
              Com forte experiência em serviços de consultoria, aumentamos a
              maturidade de TI do seu negócio, trazendo resultados com
              estratégias e soluções para atingir seu objetivo gerando o máximo
              valor.
            </p>
          </div>
        </HeroSolutions>
        <Cybersecurity>
          <h1>
            Next-Generation Command Center - A integração é a chave para
            insights superiores.
          </h1>

          <p className="textPage">
            Arquitetura de solução com alta capacidade de abrangência para
            monitoramento e gerenciamento, soluções integradas que garantem
            aderência as boas práticas e automação de rotinas operacionais.
          </p>

          <p className="textPage">
            Modelo de Governança que permite a aplicação de processos de
            melhoria contínua e alta capacidade de personalização de regras de
            negócio para monitoramento proativo, além de contar com
            profissionais técnicos multidisciplinares e gerenciamento
            centralizado de serviços.
          </p>

          <p className="textPage">
            Modelo de Governança que permite a aplicação de processos de
            melhoria contínua e alta capacidade de personalização de regras de
            negócio para monitoramento proativo.
          </p>
        </Cybersecurity>
        <ContainerInfosOne />
        <ContainerInfosTwo />
        <ContainerConsultoria />
        <ContainerImpulse />
      </Container>
      <Footer />
    </>
  );
}
