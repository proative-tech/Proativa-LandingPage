import { animateScroll } from 'react-scroll';
import Head from 'next/head';
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from '../../styles/pages/Solutions';

import { HeroSolutions } from '../../components/SolutionsPart/Hero';
import { ServiceManaged } from '../../components/SolutionsPart/ServiceManaged';

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
        <title>Proative | Soluções - Service Manager</title>
      </Head>
      <Container>
        <Header bgColor="#fff" />
        <HeroSolutions
          idMoveScroll="soluciton-service"
          className="professionals"
        >
          <div className="content__text">
            <h2>
              Nosso Managed Services traz experiência e seriedade para sua
              jornada de transformação digital.
            </h2>
            <p>
              Além de apoiá-lo nas tomadas de decisões para construir novos e
              modernos ambientes.
            </p>
          </div>
        </HeroSolutions>
        <ServiceManaged>
          <h1>
            Next-Generation Command Center - A integração é a chave para
            insights superiores.
          </h1>

          <p className="textPage">
            Nosso Command Center serve como um hub para todos os dados críticos da
            sua empresa para que ele possa ser acessado por todas as unidades de negócios,
            transformando dados globais em insights significativos.
          </p>

          <p className="textPage">
            Arquitetura de solução com alta capacidade de abrangência para monitoramento e gerenciamento,
            soluções integradas que garantem aderência as boas práticas e automação de rotinas operacionais.
          </p>

          <p className="textPage">
            Modelo de Governança que permite a aplicação de processos de melhoria contínua
            e alta capacidade de personalização de regras de negócio para monitoramento proativo,
            além de contar com profissionais técnicos multidisciplinares e gerenciamento centralizado de serviços.
          </p>
        </ServiceManaged>
        <ContainerInfosOne />
        <ContainerInfosTwo />
        <ContainerEscritorio />
        <ContainerImpulse />
      </Container>
      <Footer />
    </>
  );
}
