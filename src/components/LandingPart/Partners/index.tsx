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
  const isMobileOrTablet = useMediaQuery({ maxWidth: 845 });
  const carousel = useRef<CarouseRefData | any>();

  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <h2>Parceiros</h2>
          <h4>Parceiros Estratégicos da Proative Technology</h4>
        </S.Header>

        {!isMobileOrTablet && (
          <S.ContainerPartners>
            <S.ContainerImg>
              <img src="/images/par-flexxible.svg" alt="Automation Edge" />
            </S.ContainerImg>
            <S.ContainerImg>
              <img src="/images/par-gantech.svg" alt="Automation Edge" />
            </S.ContainerImg>
            <S.ContainerImg>
              <img src="/images/par-flexxible.svg" alt="Automation Edge" />
            </S.ContainerImg>
          </S.ContainerPartners>
        )}

        {isMobileOrTablet && (
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
                <img src="/images/par-flexxible.svg" alt="Automation Edge" />
              </S.ContainerImg>
              <S.ContainerImg>
                <img src="/images/par-gantech.svg" alt="Automation Edge" />
              </S.ContainerImg>
              <S.ContainerImg>
                <img src="/images/par-flexxible.svg" alt="Automation Edge" />
              </S.ContainerImg>
            </Carousel>
            <S.ContainerBottomCarousel>
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
            </S.ContainerBottomCarousel>
          </S.ContainerCarousel>
        )}
      </S.Content>
    </S.Wrapper>
  );
};
