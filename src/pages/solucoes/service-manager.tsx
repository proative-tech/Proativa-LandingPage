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
        <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/images/favicon/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/images/favicon/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"></meta>
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
            Next-Generation Command Center - A observabilidade é a chave para
            maior controle, gestão e eficiência.
          </h1>

          <p className="textPage">
          Nosso Command Center atua como um hub para todos os dados críticos da sua empresa, transformando dados globais em insights significativos.
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
