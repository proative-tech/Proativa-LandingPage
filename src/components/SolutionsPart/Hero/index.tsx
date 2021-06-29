import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';
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
  idMoveScroll: string;
}

export function HeroSolutions({ children, idMoveScroll }: HeroSolutionProps) {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 920 });
  const isFullWide = useMediaQuery({ minWidth: 1441 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle: any = window.innerHeight;

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
    <Container id="heroSolutions" visibled={isAnimated}>
      <ContainerTop>
        <Content>{children}</Content>
        {!isMobileOrTablet && (
          <ContainerImg>
            <img src="/images/hero3.svg" alt="Proativa" />
          </ContainerImg>
        )}
      </ContainerTop>
      <ContainerBottom>
        <Link
          to={idMoveScroll}
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
