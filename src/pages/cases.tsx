import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroMaketOrCases } from '../components/MarketParts/Hero';
import { Cases } from '../components/LandingPart/Cases';

import { Container, ContainerInfos } from '../styles/pages/Cases';
import { CaseSubHero } from '../components/CasesPart/CasesSubHero';
import { ContainerInformation } from '../components/CasesPart/ContainerInformation';

export default function Index() {
  return (
    <>
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
                  <CountUp
                    end={99.98}
                    duration={1}
                    prefix=""
                    decimal=","
                    decimals={2}
                    onEnd={({ pauseResume, reset, start, update }) => {
                      setTimeout(function () {
                        start();
                      }, 6000);
                    }}
                  />
                  %
                </h1>
                <p>de disponibilidade aos negócios</p>
              </div>

              <div className="iten">
                <h1>
                  <CountUp
                    end={25}
                    duration={1}
                    prefix=""
                    decimal=","
                    decimals={0}
                    onEnd={({ pauseResume, reset, start, update }) => {
                      setTimeout(function () {
                        start();
                      }, 6000);
                    }}
                  />
                  %
                </h1>
                <p>De redução de custos por meio da otimização de recursos</p>
              </div>

              <div className="iten">
                <h1>
                  <CountUp
                    end={40}
                    duration={1}
                    prefix=""
                    decimal=","
                    decimals={0}
                    onEnd={({ pauseResume, reset, start, update }) => {
                      setTimeout(function () {
                        start();
                      }, 6000);
                    }}
                  />
                  %
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
