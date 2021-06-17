import { useEffect } from 'react';
import Head from 'next/head';

import { animateScroll } from 'react-scroll';
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
        <title>Proative | Soluções - Profissionais</title>
      </Head>
      <Container>
        <Header bgColor="#f4f4f4" />
        <HeroSolutions idMoveScroll="containerProfessionals">
          <div className="content__text">
            <h1>
              Serviços Profissionais Um título explicativo para service manage
              com qualidades
            </h1>
            <p>
              Nosso Centro de Command serve como um hub para todos os dados
              críticos da sua empresa para que ele possa ser acessado por todos
              as unidades de negócios, transformando dados globais em insights
              significativos.
            </p>
          </div>
        </HeroSolutions>
        <Professionals>
          <h1>
            Possuímos profissionais capacitados e certificados para executar as
            atividades críticas do seu ambiente.
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
        </Professionals>
        <ContainerInfosOne />
        <ContainerInfosTwo />
        <ContainerConsultoria />
        <ContainerImpulse />
      </Container>
      <Footer />
    </>
  );
}
