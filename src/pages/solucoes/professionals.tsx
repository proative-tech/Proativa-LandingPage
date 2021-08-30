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
          idMoveScroll="containerProfessionals"
          className="professionals"
        >
          <div className="content__text">
            <h2>
              Professional Services: <br />
              Obtenha eficiência operacional com uma equipe experiente de
              serviços profissionais.
            </h2>
            <p>
            Estamos aqui para conduzir o sucesso do seu projeto ou da entrega dos seus serviços, seja você mesmo criando soluções e desejando alguma orientação ao dar o próximo passo ou procurando suporte completo de ponta a ponta para o projeto.
            </p>
          </div>
        </HeroSolutions>
        <Professionals inverter>
          <h1 style={{ maxWidth: 420 }}>
            Um time de especialistas dedicado à sua empresa.
          </h1>

          <p className="textPage">
            O Professional Services Proative oferece a alocação de profissionais
            especializados e certificados nas mais diversas áreas de atuação. A
            equipe contratada realiza suas atividades no ambiente físico ou
            remoto dos nossos clientes, o que possibilita um melhor conhecimento
            de todo o contexto envolvido, permitindo-o desenvolver os serviços
            necessários para atender às demandas da organização.
          </p>

          <p className="textPage">
            As soluções permitem a transferência total ou parcial de seus
            serviços para nossas equipes especializadas, conforme os perfis e
            requisitos previamente definidos pelos clientes. Além de
            profissionais dedicados, executamos projetos pontuais de
            Implementação, Migração, PMO e Suporte Técnico para o universo de
            Infraestrutura e Segurança da Informação.
          </p>

          <div className="footerPro">
            <h3>Diferenciais</h3>
            <p>
              Gerenciamento por SLA <br /> Economia - Agilidade - Qualidade -
              Suporte - Capacitação - Supervisão - Controle - Relatórios -
              Flexibilidade.
            </p>
          </div>
        </Professionals>
        <div style={{ marginTop: '3rem' }} />
        <ContainerInfosTwo
          infos={[
            {
              title: 'Profissional Residente',
              content:
                'Selecionamos e contratamos os melhores profissionais do mercado para atuar nas mais importantes plataformas de tecnologia e serviços.',
            },
            {
              title: 'Implementação e Migrações',
              content:
                'Realizamos projetos de implementação e Migrações para ambientes de Infraestrutura e Segurança da Informação.',
            },
            {
              title: 'Serviços de PMO',
              content:
                'O Escritório de Gerenciamento de Projetos (PMO - Project Management Office) da Proative entrega serviços de gerenciamento coordenado de projetos, atuando de forma corporativa, departamental ou operacional.',
            },
            {
              title: 'Serviços Expressos',
              content:
                'Suporte Técnico Emergencial para ambientes de Infraestrutura e Segurança da Informação.',
            },
          ]}
        />
        <ContainerImpulse labelBtn="Entre em contato sobre Professional Services">
          <div style={{ maxWidth: 620 }}>
            <h1>
              Busca um time qualificado
              <br /> e dedicado à sua empresa?
            </h1>
            <p style={{ maxWidth: 540 }}>
            Entre em contato com os nossos especialistas, estamos ansiosos para ajudá-lo com seus desafios.
            </p>
          </div>
        </ContainerImpulse>
      </Container>
      <Footer />
    </>
  );
}
