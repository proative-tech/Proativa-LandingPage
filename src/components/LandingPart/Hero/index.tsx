import { useMediaQuery } from 'react-responsive';
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

  return (
    <Container>
      <ContainerTop>
        <Content>
          <div className="content__text">
            <h1>
              Acreditamos no poder dos dados no processo de tomada de decisão.
            </h1>
            <p>
              Organizamos suas informações e facilitamos sua visualização,
              permitindo definições mais precisas e com maior confiança na
              performance e resultados.
            </p>
          </div>

          <div className="content__btns">
            <div className="containerBtn">
              <Button type="button">Conheça nossas soluções</Button>
            </div>
            <div className="containerBtn">
              <Button type="button" buttonType="secondary">
                Fale Conosco
              </Button>
            </div>
          </div>

          {!isMobileOrTablet && (
            <div className="content__socialMedia">
              <a href="/">Youtube</a>
              <a href="/">linkedIn</a>
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
          <a href="#">
            <img src="/images/icon-arrow.svg" alt="" />
          </a>
        </ContainerBottom>
      )}
    </Container>
  );
}

export default Hero;
