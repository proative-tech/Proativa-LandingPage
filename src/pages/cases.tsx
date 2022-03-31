import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import { useMediaQuery } from 'react-responsive';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroMaketOrCases } from '../components/MarketParts/Hero';
import { Cases } from '../components/LandingPart/Cases';

import { Container, ContainerInfos } from '../styles/pages/Cases';
import { CaseSubHero } from '../components/CasesPart/CasesSubHero';
import { ContainerInformation } from '../components/CasesPart/ContainerInformation';

export default function Index() {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight + 600
      : window.innerHeight + 800;

    if (!isAnimated && window.pageYOffset >= heightEle) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>Proative | Cases</title>
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
        <Header />
        <HeroMaketOrCases id="cases-top">
          <div className="content__text">
            <h1>Transformamos a sua informação em resultado</h1>
            <p>
              Atuamos em diversos mercados e sabemos quais as dores e desafios
              mais comuns de cada um deles, analisando o contexto e necessidades
              específicas de cada público e verificando as máximas de qualidade
              de cada setor.
            </p>
          </div>
        </HeroMaketOrCases>
        <ContainerInfos>
          <CaseSubHero />
          <ContainerInformation />
          <Cases>
            <section className="section-main">
              <h3>Resultados</h3>
              <p>Resultados obtidos com Proative</p>
            </section>

            <section className="section-item">
              <div className="iten">
                <h1>
                  {isAnimated ? (
                    <>
                      <CountUp
                        end={99.98}
                        duration={1}
                        prefix=""
                        decimal=","
                        decimals={2}
                        start={0}
                      />
                      %
                    </>
                  ) : (
                    '+0'
                  )}
                </h1>
                <p>de disponibilidade aos negócios</p>
              </div>

              <div className="iten">
                <h1>
                  {isAnimated ? (
                    <>
                      <CountUp
                        end={25}
                        duration={1}
                        prefix=""
                        decimal=","
                        decimals={0}
                        start={0}
                      />
                      %
                    </>
                  ) : (
                    '+0'
                  )}
                </h1>
                <p>De redução de custos por meio da otimização de recursos</p>
              </div>

              <div className="iten">
                <h1>
                  {isAnimated ? (
                    <>
                      <CountUp
                        end={40}
                        duration={1}
                        prefix=""
                        decimal=","
                        decimals={0}
                        start={0}
                      />
                      %
                    </>
                  ) : (
                    '+0'
                  )}
                </h1>
                <p>De incidentes remediados</p>
              </div>
            </section>
          </Cases>
        </ContainerInfos>
      </Container>
      <Footer />
    </>
  );
}
