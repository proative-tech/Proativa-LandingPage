import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
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
  const router = useRouter();

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
              <Button type="button" onClick={() => router.push('/solucoes')}>
                Conheça nossas soluções
              </Button>
            </div>
            <div className="containerBtn">
              <Button
                type="button"
                buttonType="secondary"
                onClick={() => router.push('/fale-conosco')}
              >
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
          <Link
            activeClass="active"
            to="inicio"
            spy
            smooth
            offset={50}
            duration={500}
            delay={1000}
          >
            <a href="#">
              <img src="/images/icon-arrow.svg" alt="" />
            </a>
          </Link>
        </ContainerBottom>
      )}
    </Container>
  );
}

export default Hero;
