import React from 'react';

import { animateScroll as scroll } from 'react-scroll';
import Head from 'next/head';

import Hero from '../components/LandingPart/Hero';
import { Header } from '../components/Header';
import { About } from '../components/LandingPart/About';
import { AboutTwo } from '../components/LandingPart/AboutTwo';
import { AboutThree } from '../components/LandingPart/AboutThree';
import { Informations } from '../components/LandingPart/Informations';
import { Container } from '../styles/pages/LandingPage';
import { Cases } from '../components/LandingPart/Cases';
import { Footer } from '../components/Footer';

export default function Index() {
  React.useEffect(() => {
    const storeSetItem = localStorage.getItem('@CLICK_DROPDOWN_HOME');

    if (storeSetItem) {
      const ele: Element | any = document.getElementById(storeSetItem);

      const heightEle = ele?.getBoundingClientRect().top + window.scrollY;

      setTimeout(() => {
        scroll.scrollTo(heightEle, {
          duration: 700,
          smooth: true,
        });

        localStorage.removeItem('@CLICK_DROPDOWN_HOME');
      }, 1000);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Proative | Home</title>
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
        <Header bgColor="#fff" />
        <Hero />
        <Informations />
        <About />
        <AboutTwo />
        <AboutThree />
      </Container>
      <Cases />
      <Footer />
    </>
  );
}
