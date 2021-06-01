/* eslint-disable react/require-default-props */
import React, { useRef, ReactNode, useState, useEffect } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { useMediaQuery } from 'react-responsive';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import VisibilitySensor from 'react-visibility-sensor';

import CountUp, { useCountUp } from 'react-countup';

import {
  Container,
  Content,
  ContainerCarousel,
  ContainerBottomCarousel,
} from './styles';
import { CardComments } from '../CardComments';

interface CarouseRefData extends ReactElasticCarouselProps {
  slidePrev: () => void;
  slideNext: () => void;
}

interface CasesProps {
  children?: ReactNode;
}

export function Cases({ children }: CasesProps) {
  const carousel = useRef<CarouseRefData | any>();

  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  const items = [1, 2, 3];

  const initialValue = 0;

  return (
    <Container>
      <Content>
        {children ? (
          <>{children}</>
        ) : (
          <>
            <section className="section-main">
              <h3>Cobertura Completa</h3>
              <p>Atendimento em todo território naciona.</p>
            </section>

            <section className="section-item">
              <div className="iten">
                <h1>
                  <CountUp
                    end={55}
                    duration={5}
                    prefix="+"
                    decimal="."
                    decimals={3}
                    onEnd={({ pauseResume, reset, start, update }) => {
                      setTimeout(function () {
                        start();
                      }, 3000);
                    }}
                  />
                </h1>
                <p>Itens monitorados</p>
              </div>

              <div className="iten">
                <h1>
                  <CountUp
                    end={20}
                    duration={5}
                    prefix="+"
                    decimal="."
                    decimals={3}
                    onEnd={({ pauseResume, reset, start, update }) => {
                      setTimeout(function () {
                        start();
                      }, 3000);
                    }}
                  />
                </h1>
                <p>Devices monitorados</p>
              </div>
              <div className="iten">
                <h1>
                  <CountUp
                    end={25}
                    duration={5}
                    prefix="+"
                    decimal="."
                    decimals={3}
                    onEnd={({ pauseResume, reset, start, update }) => {
                      setTimeout(function () {
                        start();
                      }, 3000);
                    }}
                  />
                </h1>
                <p>Incidentes/mês</p>
              </div>
            </section>
          </>
        )}

        <section className="section-line">
          <hr />
        </section>

        <section className="section-client">
          <h3>O que os clientes dizem</h3>
          <p>Sobre os serviços e soluções Proative</p>
        </section>

        {!isMobileOrTablet && (
          <section className="section-comentario">
            <CardComments />
            <CardComments />
          </section>
        )}

        {isMobileOrTablet && (
          <ContainerCarousel>
            <Carousel
              isRTL={false}
              className="containerREC"
              itemsToShow={1}
              itemPadding={[0, 24]}
              ref={carousel}
              pagination={false}
            >
              {items.map(item => (
                <CardComments />
              ))}
            </Carousel>
            <ContainerBottomCarousel>
              <button
                type="button"
                onClick={() => carousel.current.slidePrev()}
              >
                <FiChevronLeft size={24} color="#000" />
              </button>
              <div />
              <button
                type="button"
                onClick={() => carousel.current.slideNext()}
              >
                <FiChevronRight size={24} color="#000" />
              </button>
            </ContainerBottomCarousel>
          </ContainerCarousel>
        )}
      </Content>
    </Container>
  );
}
