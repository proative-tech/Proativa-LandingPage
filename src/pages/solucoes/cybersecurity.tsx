/* eslint-disable no-irregular-whitespace */
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
import { ConteinerInfosThree } from '../../components/SolutionsPart/ConteinerInfosThree';
import { ContainerInfosTwo } from '../../components/SolutionsPart/ConteinerInfosTwo';
import { ContainerConsultoria } from '../../components/SolutionsPart/ContainerConsultoria';
import { ContainerImpulse } from '../../components/SolutionsPart/ContainerImpulse';
import { ContainerBarLeft } from '../../components/SolutionsPart/ContainerBarLeft';
import { ContainerEscritorio } from '../../components/SolutionsPart/ContainerEscritorio';

export default function Index() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Proative | Soluções - Cybersecutiry</title>
        <script src='https://cdn.privacytools.com.br/public_api/banner/autoblock/v2/W2lz812131.js?t=1'></script>
        <link rel="stylesheet" href="https://cdn.privacytools.com.br/public_api/banner/style/W2lz812131.css?t=1"></link>
        <script type="text/javascript" src="https://cdn.privacytools.com.br/public_api/banner/script/bottom/W2lz812131.js?t=1"></script>
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
        <HeroSolutions idMoveScroll="containerCybersecurity" className="cyber">
          <div className="content__text">
            <h2>
              Cyber Security Services: <br />
              Proteja seu ambiente contra ataques cibernéticos.
            </h2>
            <p>
              Trabalhamos com proteção proativa de segurança cibernética em
              várias camadas, transformando o seu negócio com orquestração,
              automação, consultoria, cloud e serviços gerenciados de segurança.
            </p>
          </div>
        </HeroSolutions>
        <Cybersecurity>
          <h1>Os serviços certos para suas necessidades de segurança.</h1>

          <p className="textPage">
            Nossos serviços de segurança cibernética cobrem as seguintes áreas:
            Estratégia de programa de segurança cibernética, gerenciamento de
            riscos, avaliação de riscos, inteligência de ameaças, resposta a
            incidentes, proteção avançada contra malware e ransomware, segurança
            de perímetro, avaliação de aplicativos e serviços de monitoramento
            de segurança.
          </p>

          <p className="textPage">
            Saiba onde você está e como proteger melhor sua organização com a
            análise de lacunas de segurança cibernética para identificar um
            roteiro claro e um programa de segurança cibernética mais forte.
          </p>
        </Cybersecurity>
        <ContainerBarLeft>
          <p>
            Nosso portfólio de soluções de Cyber Security consiste em uma
            variedade de serviços projetados para atender a todas as
            necessidades da sua empresa. Eles também são personalizáveis ​​de
            acordo com seus requisitos específicos e fornecem notificações,
            relatórios e painéis detalhados. Ajudamos você a escolher a melhor
            solução, adaptada especificamente para as ameaças à segurança
            cibernética que sua empresa enfrenta.
          </p>
        </ContainerBarLeft>
        <ConteinerInfosThree />
        <ContainerInfosTwo
          infos={[
            {
              title: 'Cloud Solutions',
              content:
                'Uma unidade de operações especializadas de segurança para a cloud pública, composta por profissionais com larga experiência de implantação, configuração e checagem de security posture.',
            },
            {
              title: 'Data Protection',
              content:
                'Um projeto de proteção aos dados bem construído, pode livrar uma empresa de prejuízos incalculáveis e irreversíveis. Hoje a informação é patrimônio, e além dela valer muito para você, ela pode valer mais ainda para o cibercrime.',
            },
            {
              title: 'Network Security',
              content:
                'Você sabia que os dispositivos implantados na sua rede falam? Neste exato momento, você pode estar perdendo informações importantes sobre possíveis falhas.',
            },
            {
              title: 'Governance, Risk and Compliance',
              content:
                'O escopo de atuação da área de GRC (Governance, Risk and Compliance) abrange os processos de Governança/Gestão de Segurança da Informação, Gestão de Riscos, atendimento de aspectos regulatórios e liderança de iniciativas de capacitação, além da conscientização dos colaboradores em relação ao tema Segurança da Informação.',
            },
          ]}
        />

        <ContainerImpulse labelBtn="Entre em contato sobre Cyber Security Services">
          <div style={{ maxWidth: '493px' }}>
            <h1>Quer elevar sua segurança cibernética?</h1>
            <p>
            Entre em contato com os nossos especialistas, estamos ansiosos para ajudá-lo com seus desafios.
            </p>
          </div>
        </ContainerImpulse>
      </Container>
      <Footer />
    </>
  );
}
