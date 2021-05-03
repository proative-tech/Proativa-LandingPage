import { useRef } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { useMediaQuery } from 'react-responsive';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

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

export function Cases() {
  const carousel = useRef<CarouseRefData | any>();

  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  const items = [1, 2, 3];

  return (
    <Container>
      <Content>
        <section className="section-main">
          <h3>Cobertura Completa</h3>
          <p>Atendimento em todo território naciona.</p>
        </section>

        <section className="section-item">
          <div className="iten">
            <h1>+55.00</h1>
            <p>Itens monitorados</p>
          </div>

          <div className="iten">
            <h1>+20.00</h1>
            <p>Devices monitorados</p>
          </div>

          <div className="iten">
            <h1>+25.00</h1>
            <p>Incidentes/mês</p>
          </div>
        </section>

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
