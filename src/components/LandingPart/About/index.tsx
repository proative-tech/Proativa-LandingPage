import { useMediaQuery } from 'react-responsive';
import { ReactNode } from 'react';

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { Container, ContainerImg, Content, Header, Footer } from './styles';

interface AboutProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const About = ({ children }: AboutProps) => {
  const is1920 = useMediaQuery({ minWidth: 1601 });
  return (
    <Element name="inicio" className="element">
      <Container>
        <ContainerImg>
          <div className="video" />
        </ContainerImg>
        <Content>
          <Header>
            <span>Sobre a Proative Technology</span>
            <h1>
              Somos uma empresa de tecnologia especializada em soluções
              inovadoras de serviços gerenciados.
            </h1>
            <p>
              Trazemos ordem e simplicidade a ambientes complexos facilitando a
              tomada de decisão. Trabalhamos o equilíbrio entre criatividade,
              tecnologia, governança e agilidade, sustentada sempre, por pessoas
              apaixonadas pelo sucesso.
            </p>
          </Header>
          <Footer>
            <h3>História</h3>
            <p>
              Desde 2007, a nossa missão tem sido de tornar as operações dos
              nossos clientes mais simples e eficientes, facilitando as tomadas
              de decisões potencializando o crescimento do negócio.
            </p>
          </Footer>
        </Content>
      </Container>
    </Element>
  );
};
