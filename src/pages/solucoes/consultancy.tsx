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
import { ContainerInfoConsul } from '../../components/SolutionsPart/ContainerInfoConsul';
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
          idMoveScroll="containerConsultancy"
          className="consultancyID"
        >
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
        <Consultancy>
          <h1 style={{ maxWidth: 418 }}>
            TI Impulsionando e colaborando com o negócio.
          </h1>

          <p className="textPage">
          Nosso principal objetivo em Governança de TI é alinhar a Tecnologia e a Informação aos requisitos do negócio, levando em consideração soluções que agreguem valor, com garantia de continuidade dos serviços, minimizando as ameaças, potencializando as oportunidades que TI pode proporcionar ao negócio, assegurando a otimização dos recursos.
          </p>

          <p className="textPage">
          Nós identificamos através de um diagnóstico em qual nível de maturidade sua empresa se encontra, essa informação é essencial para implantar uma governança de TI adequada, além de avaliar as práticas internas e elaborar ações de melhorias para que a sua TI consiga acompanhar as exigências do mercado e oferecer os benefícios esperados.
          </p>
        </Consultancy>
        <ContainerInfoConsul />

        <ContainerInfosTwo
          infos={[
            {
              title: 'Quality Control',
              content:
                'Equipe dedicada para verificação da qualidade nos atendimentos efetuados dos times de suporte de acordo com as boas práticas de mercado. Call Monitoring, Ombudsman, Satisfaction Survey, Trainning/Corporate Education.',
            },
            {
              title: 'New Services',
              content:
                'Conjunto de Processos que garante a entrada fluida e organizada de novas demandas e serviços. POPs Creation, Training , Service Catalog, Assisted Operation.',
            },
            {
              title: 'KPI & SLA Control',
              content:
                'Realiza o acompanhamento das operações conforme KPI’s e SLA’s pré estabelecidos, fornecendo relatórios de controles: Daily, Weekly, Monthly, BI e Custom reports.',
            },
            {
              title: 'Service Intelligence',
              content:
                'Analisa, monitora e trata informações da operação, facilitando a tomada de decisão estratégica: SLAM, Ticket Review, Ticket Audit, Morning Meeting, Custom Projects.',
            },
          ]}
        />
        <ContainerImpulse labelBtn="Entre em contato sobre Consulting Services">
          <div style={{ maxWidth: 620 }}>
            <h1>Quer elevar sua maturidade em Governança de TI?</h1>
            <p style={{ maxWidth: 480 }}>
            Entre em contato com os nossos especialistas, estamos ansiosos para ajudá-lo com seus desafios.
            </p>
          </div>
        </ContainerImpulse>
      </Container>
      <Footer />
    </>
  );
}
