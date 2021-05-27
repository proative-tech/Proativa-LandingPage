import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';

import {
  Container,
  Content,
  ContainerImg,
  ContainerTop,
  ContainerBottom,
} from './styles';

interface HeroSolutionProps {
  children: ReactNode;
}

export function HeroSolutions({ children }: HeroSolutionProps) {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 920 });
  const router = useRouter();

  return (
    <Container>
      <ContainerTop>
        <Content>{children}</Content>
        {!isMobileOrTablet && (
          <ContainerImg>
            <img src="/images/herosolution.svg" alt="Proativa" />
          </ContainerImg>
        )}
      </ContainerTop>
      <ContainerBottom>
        <Link
          to="soluciton-service"
          duration={700}
          smooth
          style={{ cursor: 'pointer' }}
        >
          <img src="/images/icon-arrow.svg" alt="" />
        </Link>
      </ContainerBottom>
    </Container>
  );
}
