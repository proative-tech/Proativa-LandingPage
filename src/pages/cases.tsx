import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroMaketOrCases } from '../components/MarketParts/Hero';
import { Cases } from '../components/LandingPart/Cases';

import { Container, ContainerInfos } from '../styles/pages/Cases';
import { CaseSubHero } from '../components/CasesPart/CasesSubHero';

export default function Index() {
  return (
    <>
      <Container>
        <Header />
        <HeroMaketOrCases>
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
          <Cases>
            <section className="section-main">
              <h3>Resultados</h3>
              <p>Resultados obtidos com Proative</p>
            </section>

            <section className="section-item">
              <div className="iten">
                <h1>99,98%</h1>
                <p>de disponibilidade aos negócios</p>
              </div>

              <div className="iten">
                <h1>25%</h1>
                <p>De redução de custos por meio da otimização de recursos</p>
              </div>

              <div className="iten">
                <h1>40%</h1>
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
