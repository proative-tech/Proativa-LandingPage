import React from 'react';

import { Header } from '../../components/Header';
import { Home } from '../../components/Home';
import { About } from '../../components/About';
import { Solution } from '../../components/Solution';
import { Marketplace } from '../../components/Marketplace';
import { MarketPlaceTwo } from '../../components/MarketPlaceTwo';
import { Cases } from '../../components/Cases';
import { Footer } from '../../components/Footer';

export function LandingPage() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Solution />
            <Marketplace />
            <MarketPlaceTwo />
            <Cases />
            <Footer />
        </>
    )
}