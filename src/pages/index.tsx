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
