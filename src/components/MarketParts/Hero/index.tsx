/* eslint-disable react/require-default-props */
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
import { ReactNode, useState, useEffect } from 'react';
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
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight + 700
      : window.innerHeight + 400;

    if (!isAnimated && window.pageYOffset >= heightEle) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id={id} visibled={isAnimated}>
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
