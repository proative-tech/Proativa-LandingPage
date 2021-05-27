import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import React, { useRef } from 'react';
import { Button } from '../../Button';

import {
  Container,
  Content,
  ContainerImg,
  ContainerTop,
  ContainerBottom,
} from './styles';

function Hero() {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });
  const router = useRouter();

  const myRef = useRef(null);

  return (
    <Container>
      <ContainerTop>
        <Content>
          <div className="content__text">
            <h1>
              Impulsionando operações com Serviços Gerenciados que focam o
              negócio.
            </h1>
            <p>
              Mais informações permitem decisões mais precisas. As soluções da
              Proative usam os dados disponíveis para produzir as melhores
              tomadas de decisões.
            </p>
          </div>

          <div className="content__btns">
            <div className="containerBtn">
              <Button type="button">Conheça nossas soluções</Button>
            </div>
            <div className="containerBtn">
              <Button
                type="button"
                buttonType="secondary"
                onClick={() => router.push('/fale-conosco')}
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {!isMobileOrTablet && (
            <div className="content__socialMedia">
              <a href="/">Youtube</a>
              <a href="/">linkedIn</a>
            </div>
          )}
        </Content>
        <ContainerImg>
          <img
            src={
              isMobileOrTablet
                ? '/images/illus-hero-mobile.svg'
                : '/images/illus-hero.svg'
            }
            alt="Proativa"
          />
        </ContainerImg>
      </ContainerTop>
      {!isMobileOrTablet && (
        <ContainerBottom>
          <a href="#inicio">
            <img src="/images/icon-arrow.svg" alt="" />
          </a>
        </ContainerBottom>
      )}
    </Container>
  );
}

export default Hero;
