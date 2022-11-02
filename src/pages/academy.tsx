import Head from 'next/head';
import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ContainerFinish } from '../components/Academy/ContainerFinish';
import {
  ContainerButton,
  ContainerTop,
} from '../components/Academy/ContainerFinish/styles';
import { ContainerInit } from '../components/Academy/ContainerInit';
import { ContainerImgLeft } from '../components/Academy/ContainerImgLeft';
import { ContainerImgRight } from '../components/Academy/ContainerImgRight';
import { ButtonText } from '../components/SolutionsPart/ButtonText';
import { ContainerInfoAcademy } from '../components/Academy/ContainerInfoAcademy';

import { Container } from '../styles/pages/Solutions';
import { ContainerImgRightTwo } from '../components/Academy/ContainerImgRightTwo';

export default function Index() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Proative | Soluções - Academy</title>
        <script src="https://cdn.privacytools.com.br/public_api/banner/autoblock/v2/W2lz812131.js?t=1" />
        <link
          rel="preload"
          href="https://cdn.privacytools.com.br/public_api/banner/style/W2lz812131.css?t=1"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.privacytools.com.br/public_api/banner/style/W2lz812131.css?t=1"
        />
        <script
          type="text/javascript"
          src="https://cdn.privacytools.com.br/public_api/banner/script/bottom/W2lz812131.js?t=1"
          // rel="apple-touch-icon"
          // sizes="60x60"
          // href="/images/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Container>
        <Header />

        <ContainerInit />
        <ContainerImgRight
          name="roda de pessoas"
          img="/images/academy-roda-pessoas.png"
        >
          <header className="headerContent">
            <h1>Sobre a Proative Academy</h1>
            <p>
              A Proative tem como missão tornar as operações dos nossos clientes
              mais simples e eficientes, com isto, ao entender a complexidade da
              entrega de valor no mundo da TI atual, a TI conectada ao conceito
              da Transformação Digital, o conhecimento vem exercendo papel cada
              vez mais importante à medida em que esse conhecimento está
              diretamente ligado ao valor da nossa entrega para o cliente, mas
              também volátil, incerto, complexo e ambíguo, refletindo o que
              chamamos de ambiente <strong>VUCA</strong> (VOLATILITY,
              UNCERTAINTY, COMPLEXITY, AMBIGUITY) sendo necessário constante
              atualização.
            </p>
          </header>
        </ContainerImgRight>

        <ContainerImgLeft
          name="observando computador"
          img="/images/academy-left1.png"
        >
          <header className="headerContent">
            <p>
              Nesse contexto, é relevante observar que estudos como o da ATD
              (Association for Talent Development) e da Universidade de
              Middlesex apontam que profissionais que não tem um treinamento
              e/ou uma capacitação assertiva, apresentam rendimento inferior aos
              colegas mais bem preparados e um sentimento de não atingimento de
              seu ápice potencial.
            </p>
          </header>
        </ContainerImgLeft>

        <ContainerImgRightTwo
          name="observando em sala"
          img="/images/academy-observando.png"
        >
          <header className="headerContent">
            <p>
              Contemplando essa necessidade de dinamismo e agilidade nas trocas
              de conhecimento e capacitação dos colaboradores, a Proative
              Academy surgiu, tendo como foco e objetivo principal, engajar os
              colaboradores, formando profissionais envolvidos com as atividades
              e conhecimentos desenvolvidos por nossa empresa, elevando seu
              nível de conhecimento nas competências técnicas e comportamentais
              necessárias para a prestação de serviços de máxima excelência aos
              nossos clientes e ao mundo da TI.
            </p>
          </header>
        </ContainerImgRightTwo>

        <ContainerTop>
          <ContainerButton>
            <ButtonText
              label="Conheça a Proative Academy"
              directionArrow="none"
              href=""
            />
          </ContainerButton>
        </ContainerTop>
      </Container>

      <ContainerInfoAcademy />
      <ContainerFinish />
      <Footer />
    </>
  );
}
