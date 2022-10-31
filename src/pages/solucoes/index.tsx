import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

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
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);
  return (
    <>
      <Head>
        <title>Proative | Soluções</title>
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
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/favicon/apple-icon-60x60.png"
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
        <Header noPaddingBottom bgColor="#fff" />
        <HeroSolutions
          idMoveScroll="soluciton-service"
          className="consultancyID"
        >
          <div className="content__text">
            <h1>
              Com uma equipe multidisciplinar entendemos as suas necessidades.
            </h1>
            <p>
              Desenhamos soluções customizáveis e mais competitivas para
              serviços gerenciados de infraestrutura, aplicações, operações,
              processos de negócio, DevOps, segurança da informação e automação,
              trazendo maior experiência para gestão de operações de missão
              crítica.
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
