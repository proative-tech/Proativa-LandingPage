import React, { useRef } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import * as S from './styles';

interface CarouseRefData extends ReactElasticCarouselProps {
  slidePrev: () => void;
  slideNext: () => void;
}

export const Partners = () => {
  const carousel = useRef<CarouseRefData | any>();

  return (
    <S.Wrapper id="partners-link">
      <S.Content>
        <S.Header>
          <h2>Parceiros</h2>
          <h4>Parceiros Estratégicos da Proative Technology</h4>
        </S.Header>

        <S.ContainerCarousel>
          <Carousel
            isRTL={false}
            className="containerREC"
            itemsToShow={1}
            itemPadding={[0, 24]}
            ref={carousel}
            pagination={false}
          >
            <S.ContainerImg>
              <img src="/images/par-automation.svg" alt="Automation Edge" />
            </S.ContainerImg>
            <S.ContainerImg>
              <img src="/images/par-gantech.svg" alt="Gantech" />
            </S.ContainerImg>
            <S.ContainerImg>
              <img src="/images/par-flexxible.svg" alt="Flexxible" />
            </S.ContainerImg>
          </Carousel>
          <S.ContainerBottomCarousel>
            <button type="button" onClick={() => carousel.current.slidePrev()}>
              <FiChevronLeft size={24} color="#000" />
            </button>
            <div />
            <button type="button" onClick={() => carousel.current.slideNext()}>
              <FiChevronRight size={24} color="#000" />
            </button>
          </S.ContainerBottomCarousel>
        </S.ContainerCarousel>

        <S.ContainerPartners>
          <S.ContainerImg>
            <img src="/images/par-automation.svg" alt="Automation Edge" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img
              id="flex"
              src="/images/par-gantech.svg"
              alt="Automation Edge"
            />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src="/images/par-flexxible.svg" alt="Automation Edge" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src="/images/new-parceiro-1.svg" alt="L5.networks" />
          </S.ContainerImg>
          <S.ContainerImg>
            <img src="/images/new-parceiro-2.svg" alt="icts" />
          </S.ContainerImg>
        </S.ContainerPartners>
      </S.Content>
    </S.Wrapper>
  );
};
