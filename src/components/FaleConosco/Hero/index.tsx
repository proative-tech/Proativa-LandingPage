import { useRouter } from 'next/router';
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

export function HeroFaleConosco({ children }: HeroSolutionProps) {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 920 });
  const router = useRouter();

  return (
    <Container>
      <ContainerTop>
        <Content>{children}</Content>
        {!isMobileOrTablet && (
          <ContainerImg>
            <img src="/images/hero3.svg" alt="Proativa" />
          </ContainerImg>
        )}
      </ContainerTop>

    </Container>
  );
}
