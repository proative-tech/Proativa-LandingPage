import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import { Button } from '../../Button';
<<<<<<< HEAD
import {Link} from 'react-scroll'
import React, { useRef } from 'react';
=======
>>>>>>> b1ba70f610f647382d60a43c3eeca03b5121fea7

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

  const myRef = useRef(null)

  return (
    <Container>
      <ContainerTop>
        <Content>
          <div className="content__text">
            <h1>
              Acreditamos no poder dos dados no processo de tomada de decisão.
            </h1>
            <p>
              Organizamos suas informações e facilitamos sua visualização,
              permitindo definições mais precisas e com maior confiança na
              performance e resultados.
            </p>
          </div>

          <div className="content__btns">
            <div className="containerBtn">
              <Button type="button" onClick={() => router.push('/solucoes')}>
                Conheça nossas soluções
              </Button>
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
<<<<<<< HEAD

          <a href="#inicio"><img src="/images/icon-arrow.svg" alt="" /></a>
=======
          <Link
            activeClass="active"
            to="inicio"
            spy
            smooth
            offset={50}
            duration={500}
            delay={1000}
          >
            <a href="#">
              <img src="/images/icon-arrow.svg" alt="" />
            </a>
          </Link>
>>>>>>> b1ba70f610f647382d60a43c3eeca03b5121fea7
        </ContainerBottom>
      )}
    </Container>
  );
}

export default Hero;
