import React, { useRef } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import * as S from './styles';

interface CarouseRefData extends ReactElasticCarouselProps {
  slidePrev: () => void;
  slideNext: () => void;
}

export const Partners = () => {
  const carousel = useRef<CarouseRefData | any>();

  const isMobile = useMediaQuery({ maxWidth: 840 });

  function myArrow({ type, onClick }) {
    const pointer =
      type === 'PREV' ? (
        <FiChevronLeft size={24} color="#000" />
      ) : (
        <FiChevronRight size={24} color="#000" />
      );

    return (
      <S.ContainerButtonCustom>
        <S.ButtonCustom type="button" onClick={onClick}>
          {pointer}
        </S.ButtonCustom>
      </S.ContainerButtonCustom>
    );
  }

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
            itemsToShow={isMobile ? 1 : 3}
            itemPadding={[0, 24]}
            ref={carousel}
            pagination={false}
            renderArrow={myArrow}
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
            <S.ContainerImg>
              <img id="l5networks" src="/images/l5network.svg" alt="L5Network" />
            </S.ContainerImg>
            <S.ContainerImg>
              <img id="icts" src="/images/icts.svg" alt="ICTS" />
            </S.ContainerImg>
          </Carousel>
        </S.ContainerCarousel>
      </S.Content>
    </S.Wrapper>
  );
};
