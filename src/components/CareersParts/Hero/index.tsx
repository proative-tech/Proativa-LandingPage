/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import { ReactNode, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';

import { Container, ContainerTop, ContainerBottom } from './styles';

export const HeroMaketOrCases = () =>{
  const isMobile = useMediaQuery({ maxWidth: 490 });
  const isMobileUltra = useMediaQuery({ minWidth: 1920 });
  const def = useMediaQuery({ minWidth: 491, maxWidth: 1919 });

  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
    ? window.innerHeight - 3900
    : window.innerHeight - 900

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
    <Container id="beginContent" visibled={isAnimated}>
      <ContainerTop>
        {(isMobile && !def) && (
          <img
            src="/images/carreiras-mobile.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
        {def && (
          <img
            src="/images/carreiras-web-1440.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
        {(!def && isMobileUltra) && (
          <img
            src="/images/carreiras-1920.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
      </ContainerTop>
      <ContainerBottom>
        <p className="tag">#vemserproative</p>
        <div className="containerMain">
          <h1>
            Nós trasparecemos <br /> <strong>comprometimento.</strong>
          </h1>
        </div>
      </ContainerBottom>
    </Container>
  );
}
