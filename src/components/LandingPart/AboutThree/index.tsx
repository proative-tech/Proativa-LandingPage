import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AnimationImg } from '../../AnimationImg';

import { Container, ContainerImg, Content, Footer } from './styles';

export const AboutThree = () => {
  const isMobile = useMediaQuery({ maxWidth: 490 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('about-three');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 200;

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
    <Container visibled={isAnimated} id="about-three">
      <ContainerImg
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          data-img="img"
          src={isMobile ? '/images/about-3-m.png' : '/images/about-3-web.png'}
          alt="proative"
        />
        <AnimationImg isHover={isHover} />
      </ContainerImg>

      <Content>
        <Footer>
          <h3>Obtenha experiência de uso em Real Time.</h3>
          <p>
          Monitoramento com camada de Observabilidade em cima do dado real, extraindo a experiência do usuário que está interagindo com seus sistemas.
          </p>
          <p>
          Trabalhamos o equilíbrio entre criatividade, tecnologia, governança e agilidade, sustentada sempre, por pessoas apaixonadas pelo sucesso.
          </p>
        </Footer>
      </Content>
    </Container>
  );
};
