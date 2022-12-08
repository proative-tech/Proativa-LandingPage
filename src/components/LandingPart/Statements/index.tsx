/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import { CardComments } from '../CardComments';

import * as S from './styles';

interface CarouseRefData extends ReactElasticCarouselProps {
  slidePrev: () => void;
  slideNext: () => void;
}

export const Statements = () => {
  const carousel = useRef<CarouseRefData | any>();

  // const isMobileOrTablet = useMediaQuery({ maxWidth: 845 });
  const isMobileOrTablet = useMediaQuery({ maxWidth: 928 });

  const items = [1, 2, 3, 4];

  const initialValue = 0;

  const [isShowElement, setIsShowElement] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('cases-ani');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle =
      ele.getBoundingClientRect().bottom + window.scrollY - 1300;

    if (!isShowElement && getWindowBottom >= heightEle) {
      setIsShowElement(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // ir para primeiro item
      carousel.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // ir para último item
      carousel.current.goTo(items.length);
    }
  };

  return (
    <S.ContainerClients id="commnets-link">
      <section className="section-client">
        <h3>O que os clientes dizem</h3>
        <p>Sobre os serviços e soluções Proative Technology</p>
      </section>

      {!isMobileOrTablet && (
        <S.ContainerCarousel>
          <Carousel
            isRTL={false}
            className="containerDEP"
            itemsToShow={2}
            itemPadding={[0, 24]}
            ref={carousel}
            pagination={false}
            renderArrow={myArrow}
            onPrevStart={onPrevStart}
            onNextStart={onNextStart}
          >
            <CardComments
              clientCompany="Veloe"
              nameClient="Fernanda Toscano"
              areaClient="Superintendente de TI"
              src="/images/par-veloe.svg"
              comment="O conhecimento do negócio e da operação, sem dúvida é um diferencial positivo de um parceiro de tecnologia e a Proative é especialista no tema monitoração, sustentação, governança de TI e operação, o que nos trouxe segurança para seguir com o projeto. O ótimo relacionamento entre as empresas também foi fator decisivo. E, o mais importante, a qualidade dos serviços prestados atende nossas expectativas."
              styles="veloe"
            />
            <CardComments
              clientCompany="Mitre Realty"
              nameClient="Aline Pontes"
              areaClient="Gerente de infraestrutura e governança em TI"
              src="/images/par-mitre.svg"
              comment="Precisávamos de uma empresa que tivesse como principal diferencial o domínio do assunto e que tinha conhecimento suficiente para identificar e estancar a nossa dor com competência e Know-how na nossa área de atuação, daí a escolha pela Proative Technology."
            />
            <CardComments
              clientCompany="Unimed Santos"
              nameClient="Robinson Pinheiro"
              areaClient="Gerente Executivo de TI"
              src="/images/par-unimed.svg"
              comment="Para monitorar temos a Proative que deverá acompanhar o crescimento de nossos serviços, monitorando, por exemplo, pacientes crônicos, serviços de home care, medicina preventiva e prontuário eletrônico."
            />
            <CardComments
              clientCompany="Tecnisa"
              nameClient="Renato Diego Bizzarri Barbosa"
              areaClient="Coordenador de Infraestrutura"
              src="/images/par-expressa.svg"
              comment="A entrega da Proative está além do monitoramento de dispositivos on e off, com a tecnologia da ferramenta e a flexibilidade na construção de dashboards é possível realizarmos o monitoramento de processos do negócio, possibilitando a atuação em melhorias importantes e não somente a visão para Capacity Planning de TI."
            />
          </Carousel>
        </S.ContainerCarousel>
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
            onPrevStart={onPrevStart}
            onNextStart={onNextStart}
          >
            <CardComments
              clientCompany="Veloe"
              nameClient="Fernanda Toscano"
              areaClient="Superintendente de TI"
              src="/images/par-veloe.svg"
              styles="veloe"
              comment="O conhecimento do negócio e da operação, sem dúvida é um diferencial positivo de um parceiro de tecnologia e a Proative é especialista no tema monitoração, sustentação, governança de TI e operação, o que nos trouxe segurança para seguir com o projeto. O ótimo relacionamento entre as empresas também foi fator decisivo. E, o mais importante, a qualidade dos serviços prestados atende nossas expectativas."
            />
            <CardComments
              clientCompany="Mitre Realty"
              nameClient="Aline Pontes"
              areaClient="Gerente de infraestrutura e governança em TI"
              src="/images/par-mitre.svg"
              comment="Precisávamos de uma empresa que tivesse como principal diferencial o domínio do assunto e que tinha conhecimento suficiente para identificar e estancar a nossa dor com competência e Know-how na nossa área de atuação, daí a escolha pela Proative Technology."
            />
            <CardComments
              clientCompany="Unimed Santos"
              nameClient="Robinson Pinheiro"
              areaClient="Gerente Executivo de TI"
              src="/images/par-unimed.svg"
              comment="Para monitorar temos a Proative que deverá acompanhar o crescimento de nossos serviços, monitorando, por exemplo, pacientes crônicos, serviços de home care, medicina preventiva e prontuário eletrônico."
            />
            <CardComments
              clientCompany="Tecnisa"
              nameClient="Renato Diego Bizzarri Barbosa"
              areaClient="Coordenador de Infraestrutura"
              src="/images/par-expressa.svg"
              comment="A entrega da Proative está além do monitoramento de dispositivos on e off, com a tecnologia da ferramenta e a flexibilidade na construção de dashboards é possível realizarmos o monitoramento de processos do negócio, possibilitando a atuação em melhorias importantes e não somente a visão para Capacity Planning de TI."
            />
          </Carousel>
          <S.ContainerBottomCarousel>
            <button
              type="button"
              onClick={() => carousel.current.onPrevStart()}
            >
              <FiChevronLeft size={24} color="#000" />
            </button>
            <div />
            <button
              type="button"
              onClick={() => carousel.current.onNextStart()}
            >
              <FiChevronRight size={24} color="#000" />
            </button>
          </S.ContainerBottomCarousel>
        </S.ContainerCarousel>
      )}
    </S.ContainerClients>
  );
};
