import React from 'react';

import { Header } from '../../components/Header';
import { Home } from '../../components/Home';
import { About } from '../../components/About';
import { Solution } from '../../components/Solution';
import { Marketplace } from '../../components/Marketplace';
import { Cases } from '../../components/Cases';

import { Container } from './styles';

export function LandingPage() {
    return (
        <Container>
            <Header />
            <Home />
            <About />
            <Solution />
            <Marketplace />
            <Cases />
        </Container>
    )
}