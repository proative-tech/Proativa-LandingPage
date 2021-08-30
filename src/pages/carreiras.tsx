import React, { useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import Head from 'next/head';

import { animateScroll } from 'react-scroll';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroMaketOrCases } from '../components/CareersParts/Hero';
import { ContainerImgLeft } from '../components/CareersParts/ContainerImgLeft';
import { ContainerImgRight } from '../components/CareersParts/ContainerImgRigth';
import { ContainerFinish } from '../components/CareersParts/ContainerFinish';

import { Container, ContainerInfos } from '../styles/pages/Careers';

export default function Index() {
  useEffect(() => {
    animateScroll.scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Proative | Carreiras</title>
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
        <Header noPaddingBottom bgColor="#fff" />
        <HeroMaketOrCases />
      </Container>
      <ContainerInfos>
        <ContainerImgRight name="logistica">
          <header className="headerContent">
            <h1>Sobre nós</h1>
            <p>
            Desde 2007, a nossa missão tem sido tornar as operações dos nossos clientes mais simples e eficientes, facilitando as tomadas de decisões, potencializando o crescimento do negócio.
            </p>
            <p>
            Trabalhamos o equilíbrio entre criatividade, tecnologia, governança e agilidade, sustentada sempre por pessoas apaixonadas pelo sucesso.
            </p>
          </header>
        </ContainerImgRight>
        <ContainerImgLeft name="logistica">
          <header className="headerContent">
            <h1>Inteligência Coletiva</h1>
            <p>
              Nosso histórico consolida nossa experiência e nossos valores
              orientam tudo o que fazemos, incluindo como interagimos com nossos
              colaboradores, clientes e parceiros, o que nos leva a uma jornada
              de sucesso mútuo.
            </p>
            <p>
              Buscamos por pessoas que compartilhem do nosso propósito e que
              sejam apaixonadas por novas responsabilidades, desafios e
              crescimento.
            </p>
          </header>
        </ContainerImgLeft>
        <ContainerFinish />
      </ContainerInfos>
      <Footer />
    </>
  );
}
