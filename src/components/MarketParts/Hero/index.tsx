/* eslint-disable react/require-default-props */
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
  id: string;
  to?: string;
}

export function HeroMaketOrCases({ children, id, to }: HeroSolutionProps) {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 920 });
  const router = useRouter();

  return (
    <Container id={id}>
      <ContainerTop>
        <Content>{children}</Content>
        {!isMobileOrTablet && (
          <ContainerImg>
            <img src="/images/grade_market.png" alt="Proativa" />
          </ContainerImg>
        )}
      </ContainerTop>
      <ContainerBottom>
        <Link to={to} smooth duration={700} style={{ cursor: 'pointer' }}>
          <img src="/images/icon-arrow.svg" alt="" />
        </Link>
      </ContainerBottom>
    </Container>
  );
}
