import React, { useEffect } from 'react';
import { useWindowScroll } from 'react-use';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroMaketOrCases } from '../components/CareersParts/Hero';
import { ContainerImgLeft } from '../components/CareersParts/ContainerImgLeft';
import { ContainerImgRight } from '../components/CareersParts/ContainerImgRigth';
import { ContainerFinish } from '../components/CareersParts/ContainerFinish';

import { Container, ContainerInfos } from '../styles/pages/Careers';

export default function Index() {
  const { y } = useWindowScroll();

  return (
    <>
      <Head>
        <title>Proative | Carreiras</title>
      </Head>
      <Container>
        <Header noPaddingBottom />
        <HeroMaketOrCases />
      </Container>
      <ContainerInfos>
        <ContainerImgRight name="logistica">
          <header className="headerContent">
            <h1>Sobre nós</h1>
            <p>
              Trazemos ordem e simplicidade a ambientes complexos facilitando a
              tomada de decisão. Trabalhamos o equilíbrio entre criatividade,
              tecnologia, governança e agilidade, sustentada sempre, por pessoas
              apaixonadas pelo sucesso.
            </p>
            <p>
              Desde 2007, a nossa missão tem sido de tornar as operações dos
              nossos clientes mais simples e eficientes, facilitando as tomadas
              de decisões potencializando o crescimento do negócio.
            </p>
          </header>
        </ContainerImgRight>
        <ContainerImgLeft name="logistica">
          <header className="headerContent">
            <h1>Sobre nós</h1>
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
