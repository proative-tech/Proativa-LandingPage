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
import { ContainerInfoRPA } from '../../components/SolutionsPart/ConteinarInfoRPA';
import { ContainerImpulse } from '../../components/SolutionsPart/ContainerImpulse';
import { RPA } from '../../components/SolutionsPart/RPA';

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
        <Header bgColor="#fff" />
        <HeroSolutions idMoveScroll="containerProfessionals" className="rpa">
          <div className="content__text">
            <h2>
              RPA: Uma plataforma de automação de processos robóticos
              inteligentes com tecnologias cognitivas.
            </h2>
            <p>
              Uma plataforma integrada de automação de processos robóticos que
              vem com tecnologias essenciais, como Inteligência Artificial,
              Machine Learning e Processamento de Linguagem Natural para front
              office, middle office, back office e automação de operações de TI.
            </p>
          </div>
        </HeroSolutions>
        <RPA>
          <h1 style={{ maxWidth: 420 }}>Automação de Processos de Negócios.</h1>

          <p className="textPage">
            Cada função de negócios tem tarefas repetitivas que consomem tempo e
            podem estar sujeitas a erros humanos. Automatize essas tarefas e
            deixe a força de trabalho trabalhar em atribuições mais
            inteligentes.
          </p>

          <p className="textPage">
            AutomationEdge - a plataforma de automação de processos robóticos
            que automatiza processos de dados repetitivos, como transações de
            processamento, coleta de dados, respostas de disparo e integra
            vários sistemas de dados diferentes.
          </p>

          <p className="textPage">
            Sua automação inteligente garante que todas as operações de front
            office, middle office, back office e operações de TI sejam feitas na
            velocidade da luz e com custo reduzido com a maior precisão.
          </p>
        </RPA>

        <ContainerInfoRPA />
        <ContainerInfosTwo
          infos={[
            {
              title: 'IT Process Automation ITPA',
              content:
                'Automatizar processos de TI, políticas e padrões que viabilizem a construção de fluxos de trabalho robotizados em back-end, podendo ser aplicado em atividade repetitivas do universo TI. Acessar API’s, Execução de Scripts, Automação de Requisitos em Sistemas.',
            },
            {
              title: 'Aplicação de RPA',
              content:
                'Aplicar Automação Robótica de Processos é uma das principais estratégias de transformação digital porque traz resultados imediatos para o curto, médio e longo prazo. Preencher Planilhas, Acessar Web Sites , Acessar Sistemas, Acessar Sistemas Antigos.',
            },
            {
              title: 'AI & ML',
              content:
                'Identificar Imagens; Interpretar E-mails; Analizar padrões.',
            },
            {
              title: 'DATA',
              content:
                'Ler banco de dados; Transformar dados; Tratar documentos físicos.',
            },
          ]}
        />
        <ContainerImpulse labelBtn="Entre em contato sobre RPA">
          <div style={{ maxWidth: 620 }}>
            <h1>
              Quer saber como entregar resultados mais precisos e eficientes?
            </h1>
            <p style={{ maxWidth: 540 }}>
              Entre em contato com a gente, nossos especialistas ficarão felizes
              em demonstrar como.
            </p>
          </div>
        </ContainerImpulse>
      </Container>
      <Footer />
    </>
  );
}
