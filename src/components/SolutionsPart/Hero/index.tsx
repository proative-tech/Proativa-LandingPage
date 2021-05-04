import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';

import {
  Container,
  Content,
  ContainerImg,
  ContainerTop,
  ContainerBottom,
} from './styles';

export function HeroSolutions() {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 920 });
  const router = useRouter();

  return (
    <Container>
      <ContainerTop>
        <Content>
          <div className="content__text">
            <h1>
              Soluções Proative para gerenciamento de sistemas e segurança da
              informação.
            </h1>
            <p>
              Nossa equipe é especializada em diversas plataformas tecnológicas
              e segmentos de mercado, possibilitando uma visualização mais ampla
              do seu negócio e suas reais necessidades, a fim de oferecer uma
              solução customizável e mais competitiva.
            </p>
          </div>
        </Content>
        {!isMobileOrTablet && (
          <ContainerImg>
            <img src="/images/herosolution.svg" alt="Proativa" />
          </ContainerImg>
        )}
      </ContainerTop>
      <ContainerBottom>
        <a href="#">
          <img src="/images/icon-arrow.svg" alt="" />
        </a>
      </ContainerBottom>
    </Container>
  );
}
