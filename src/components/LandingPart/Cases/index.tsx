/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { useRef, ReactNode, useState, useEffect } from 'react';
import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';
import { useMediaQuery } from 'react-responsive';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import CountUp, { useCountUp } from 'react-countup';

import {
  Container,
  Content,
  ContainerCarousel,
  ContainerBottomCarousel,
  ContainerClients,
  ContainerTop,
} from './styles';

import { CardComments } from '../CardComments';
import { Partners } from '../Partners';

interface CarouseRefData extends ReactElasticCarouselProps {
  slidePrev: () => void;
  slideNext: () => void;
}

interface CasesProps {
  children?: ReactNode;
}

export function Cases({ children }: CasesProps | any) {
  const carousel = useRef<CarouseRefData | any>();

  const isMobileOrTablet = useMediaQuery({ maxWidth: 845 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });

  const items = [1, 2, 3];

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

  return (
    <Container id="cases-ani">
      <Content>
        <ContainerTop>
          {children ? (
            <>{children}</>
          ) : (
            <>
              <section className="section-main">
                <h3>Cobertura Completa</h3>
                <p>Atendimento em todo território nacional.</p>
              </section>

              <section className="section-item">
                <div className="iten">
                  <h1>
                    {isShowElement ? (
                      <CountUp
                        end={55}
                        duration={5}
                        prefix="+"
                        decimal="."
                        decimals={3}
                        start={0}
                      />
                    ) : (
                      '+0'
                    )}
                  </h1>
                  <p>Itens monitorados</p>
                </div>

                <div className="iten">
                  <h1>
                    {isShowElement ? (
                      <CountUp
                        end={20}
                        duration={5}
                        prefix="+"
                        decimal="."
                        decimals={3}
                        start={0}
                      />
                    ) : (
                      '+0'
                    )}
                  </h1>
                  <p>Devices monitorados</p>
                </div>
                <div className="iten">
                  <h1>
                    {isShowElement ? (
                      <CountUp
                        end={25}
                        duration={5}
                        prefix="+"
                        decimal="."
                        decimals={3}
                        start={0}
                      />
                    ) : (
                      '+0'
                    )}
                  </h1>
                  <p>Incidentes/mês</p>
                </div>
              </section>
            </>
          )}

          <section className="section-line">
            <hr />
          </section>
        </ContainerTop>

        <Partners />

        <ContainerClients id="commnets-link">
          <section className="section-client">
            <h3>O que os clientes dizem</h3>
            <p>Sobre os serviços e soluções Proative Technology</p>
          </section>

          {!isMobileOrTablet && (
            <section className="section-comentario">
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
                  comment="A entrega está além do monitoramento de dispositivos on e off, com a tecnologia e a flexibilidade na construção de dashboards é possível monitorarmos processos, possibilitando a atuação a atuação em melhorias importantes para o negócio e não somente uma visão para Capacity Planning de TI"
                />
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
        </ContainerClients>
      </Content>
    </Container>
  );
}
