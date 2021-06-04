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
    const ele: Element | any = document.getElementById('beginContent');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY;

    if (!isAnimated && getWindowBottom >= heightEle) {
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
            src="/images/Imagem_Carreiras01.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
        {def && (
          <img
            src="/images/Imagem_Carreiras01.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
        {(!def && isMobileUltra) && (
          <img
            src="/images/Imagem_Carreiras01.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
      </ContainerTop>
      <ContainerBottom>
        <a href="https://vemserproative.solides.jobs/" >
          <h1>
            <p className="tag">Somos feitos de pessoas <br /> que fazem acontecer.</p>
          </h1>
        </a>

        <div className="containerMain">
          <h1>
            Nós trasparecemos <br /> <strong>comprometimento.</strong>
          </h1>
        </div>
      </ContainerBottom>
    </Container>
  );
}
