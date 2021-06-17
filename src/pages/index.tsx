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
