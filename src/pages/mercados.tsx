import Head from 'next/head';

import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroMaketOrCases } from '../components/MarketParts/Hero';
import { ContainerImgLeft } from '../components/MarketParts/ContainerImgLeft';
import { ContainerImgRight } from '../components/MarketParts/ContainerImgRigth';

import { Container, ContainerInfos } from '../styles/pages/MarketOrCases';

export default function Index() {
  return (
    <>
      <Head>
        <title>Proative | Mercados</title>
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
        <Header bgColor="#f4f4f4" />
        <HeroMaketOrCases id="mkt-top" to="mkt-logista">
          <div className="content__text">
            <h1>Mercados de Atuação</h1>
            <p>
              Atuamos em diversos mercados e sabemos quais as dores e desafios
              mais comuns de cada um deles, analisando o contexto e necessidades
              específicas de cada público e verificando as máximas de qualidade
              de cada setor.
            </p>
          </div>
        </HeroMaketOrCases>
      </Container>
      <ContainerInfos>
        <ContainerImgLeft
          src="/images/1_market.png"
          name="logistica"
          id="mkt-logista"
        >
          <header className="headerContent">
            <h1>Logística</h1>
            <p>
              Imagine que a missão crítica do negócio é a distribuição de
              medicamentos de alto custo/complexidade e, que para garantir uma
              distribuição rápida e segura, você precisa ter dos seus principais
              indicadores de controle.
            </p>
          </header>

          <div className="restContent">
            <div className="containerText">
              <h3>Desafios</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
            <div className="containerText">
              <h3>Soluções</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
          </div>
        </ContainerImgLeft>
        <ContainerImgRight
          src="/images/2_market.png"
          name="logistica"
          id="mkt-Health"
        >
          <header className="headerContent">
            <h1>Health and Care</h1>
            <p>
              Imagine que a missão crítica do negócio é a distribuição de
              medicamentos de alto custo/complexidade e, que para garantir uma
              distribuição rápida e segura, você precisa ter dos seus principais
              indicadores de controle.
            </p>
          </header>

          <div className="restContent">
            <div className="containerText">
              <h3>Desafios</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
            <div className="containerText">
              <h3>Soluções</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
          </div>
        </ContainerImgRight>
        <ContainerImgLeft
          src="/images/3_market.png"
          name="logistica"
          id="mkt-contrucao"
          pixelOffset
        >
          <header className="headerContent">
            <h1>Construção Civil</h1>
            <p>
              Imagine que a missão crítica do negócio é a distribuição de
              medicamentos de alto custo/complexidade e, que para garantir uma
              distribuição rápida e segura, você precisa ter dos seus principais
              indicadores de controle.
            </p>
          </header>

          <div className="restContent">
            <div className="containerText">
              <h3>Desafios</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
            <div className="containerText">
              <h3>Soluções</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
          </div>
        </ContainerImgLeft>
        <ContainerImgRight
          src="/images/4_market.png"
          name="logistica"
          id="mkt-Financeiro"
          pixelOffset
        >
          <header className="headerContent">
            <h1>Financeiro</h1>
            <p>
              Imagine que a missão crítica do negócio é a distribuição de
              medicamentos de alto custo/complexidade e, que para garantir uma
              distribuição rápida e segura, você precisa ter dos seus principais
              indicadores de controle.
            </p>
          </header>

          <div className="restContent">
            <div className="containerText">
              <h3>Desafios</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
            <div className="containerText">
              <h3>Soluções</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
          </div>
        </ContainerImgRight>
        <ContainerImgLeft
          src="/images/5_market.png"
          name="logistica"
          id="mkt-Outros"
          pixelOffset
        >
          <header className="headerContent">
            <h1>Outros Segmentos</h1>
            <p>
              Imagine que a missão crítica do negócio é a distribuição de
              medicamentos de alto custo/complexidade e, que para garantir uma
              distribuição rápida e segura, você precisa ter dos seus principais
              indicadores de controle.
            </p>
          </header>

          <div className="restContent">
            <div className="containerText">
              <h3>Desafios</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
            <div className="containerText">
              <h3>Soluções</h3>
              <p>
                Já pensou que antes de entregar o medicamento no tempo acordado,
                você precisa garantir que o mesmo esteja sendo acomodado em
                condições adequadas de temperatura e umidade para garantir uma
                entrega segura, qual o prejuízo que isto pode representar se
                você não tiver um gerenciamento em tempo real destas
                informações?
              </p>
            </div>
          </div>
        </ContainerImgLeft>
      </ContainerInfos>
      <Footer />
    </>
  );
}
