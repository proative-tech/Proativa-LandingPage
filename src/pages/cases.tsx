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
