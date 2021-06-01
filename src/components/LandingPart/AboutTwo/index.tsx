import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, ContainerImg, Content, Header } from './styles';

export const AboutTwo = () => {
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
    <Container visibled={isAnimated}>
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
