import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { AnimationImg } from '../../AnimationImg';
import { Container, ContainerImg, Content, Header } from './styles';

export const AboutTwo = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('about-two');

    const getWindowBottom = window.scrollY + window.innerHeight;
    // const heightEle = ele?.getBoundingClientRect().bottom + window.scrollY - 200;
    const heightEle = ele?.getBoundingClientRect().top + window.scrollY + 100;

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
    <Container visibled={isAnimated} id="about-two">
      <Content>
        <Header>
          <h1>Governança de TI impulsionando e colaborando com o negócio.</h1>
          <p>
          Nosso principal objetivo em Governança de TI é alinhar a Tecnologia da Informação aos requisitos do negócio, levando em consideração soluções que agreguem valor e qualidade.
          </p>
        </Header>
      </Content>
      <ContainerImg
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src="/images/home2.png" alt="proative" data-img="img" />
        <AnimationImg isHover={isHover} />
      </ContainerImg>
    </Container>
  );
};
