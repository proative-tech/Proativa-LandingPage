import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, ContainerImg, Content, Footer } from './styles';

export const AboutThree = () => {
  const isMobile = useMediaQuery({ maxWidth: 490 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight + 700
      : window.innerHeight;

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
      <ContainerImg>
        <img
          data-img="img"
          src={isMobile ? '/images/about-3-m.png' : '/images/about-3-web.png'}
          alt="proative"
        />
      </ContainerImg>

      <Content>
        <Footer>
          <h3>Extraia experiência de uso em Real Time.</h3>
          <p>
            Monitoramento com camada de Observabilidade em cima do dado real,
            extraindo a experiência do usuário que está interagindo com seus
            sistemas.
          </p>
        </Footer>
      </Content>
    </Container>
  );
};
