import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, ContainerImg, Content, Header } from './styles';

export const AboutTwo = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('about-two');

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
    <Container visibled={isAnimated} id="about-two">
      <Content>
        <Header>
          <h1>Governança de TI impulsionando e colaborando seu negócio.</h1>
          <p>
            Nosso principal objetivo em Governança de TI é alinhar a Tecnologia
            da Informação aos requisitos do negócio, levando em consideração
            soluções que agreguem valor e qualidade, integrando e automatizando
            os fluxos de trabalho, com garantia de continuidade dos serviços.
          </p>
        </Header>
      </Content>
      <ContainerImg>
        <img src="/images/home2.png" alt="proative" data-img="img" />
      </ContainerImg>
    </Container>
  );
};
