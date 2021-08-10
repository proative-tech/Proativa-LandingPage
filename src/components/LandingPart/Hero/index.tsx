import Image from 'next/image';
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
            Lentes para gerar valor e potencializar negócios.
            </h1>
            <p>
            Trazemos ordem e simplicidade a ambientes complexos, facilitando a tomada de decisão e otimizando os resultados do seu negócio.
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
              <a href="https://www.youtube.com/channel/UC4gXi-wVzJhb5jehBUgCb9A">Youtube</a>
              <a href="https://www.linkedin.com/company/proativetechnology/">linkedIn</a>
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
          <Link
            to="lg-container-info"
            smooth
            duration={700}
            offset={-50}
            style={{
              display: 'inline-block',
              zIndex: 20,
              width: 60,
              height: 40,
              cursor: 'pointer',
            }}
          >
            <img src="/images/icon-arrow.svg" alt="" />
          </Link>
        </ContainerBottom>
      )}
    </Container>
  );
}

export default Hero;
