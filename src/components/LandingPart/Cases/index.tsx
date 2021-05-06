/* eslint-disable react/require-default-props */
import { useRef, ReactNode } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { useMediaQuery } from 'react-responsive';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import CountUp from 'react-countup';

import {
  Container,
  Content,
  ContainerCarousel,
  ContainerBottomCarousel,
} from './styles';
import { CardComments } from '../CardComments';
import { start } from 'repl';

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
              <CountUp
                start={1}
                end={55.000}
                duration={2.75}
                separator=" "
                decimals={3}
                decimal="."
                prefix="+"
                suffix=""
              >
                {({ countUpRef, start }) => (
                  <div>
                    <h1 ref={countUpRef}>+55.00</h1>
                  </div>
                )}
              </CountUp>
                <p>Itens monitorados</p>
              </div>

              <div className="iten">
              <CountUp
                start={0}
                end={20.000}
                duration={2.75}
                separator=" "
                decimals={3}
                decimal="."
                prefix="+"
                suffix=""
              >
                {({ countUpRef, start }) => (
                  <div>
                    <h1 ref={countUpRef}>+55.00</h1>
                  </div>
                )}
              </CountUp>
              <p>Devices monitorados</p>
              </div>
              

              <div className="iten">
              <CountUp
                start={1}
                end={25.000}
                duration={3}
                separator=" "
                decimals={3}
                decimal="."
                prefix="+"
                suffix=""
              >
                {({ countUpRef, start }) => (
                  <div>
                    <h1 ref={countUpRef}></h1>
                  </div>
                )}
              </CountUp>
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
