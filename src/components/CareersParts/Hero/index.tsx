/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';

import { Container, ContainerTop, ContainerBottom } from './styles';

export function HeroMaketOrCases() {
  const isMobile = useMediaQuery({ maxWidth: 490 });
  const isMobileUltra = useMediaQuery({ minWidth: 1920 });
  const def = useMediaQuery({ minWidth: 491, maxWidth: 1919 });

  return (
    <Container>
      <ContainerTop>
        {(isMobile && !def) && (
          <img
            src="/images/carreiras-mobile.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
        {def && (
          <img
            src="/images/carreiras-web-1440.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
        {(!def && isMobileUltra) && (
          <img
            src="/images/carreiras-1920.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
      </ContainerTop>
      <ContainerBottom>
        <p className="tag">#vemserproative</p>
        <div className="containerMain">
          <h1>
            Nós trasparecemos <br /> <strong>comprometimento.</strong>
          </h1>
        </div>
      </ContainerBottom>
    </Container>
  );
}
