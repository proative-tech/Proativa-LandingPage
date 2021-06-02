import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';
import { Container, Content, ContentTop } from './styles';

export const ContainerImpulse = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight + 2700
      : window.innerHeight + 2000;

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
        <ContentTop>
          <h1>
            Quer impulsionar o desempenho sua operação de TI e do seu negócio?
          </h1>
          <p>
            Nosso Next-Generation Command Center é altamente contextualizado com
            ferramentas e aplicativos que são conscientes do contexto de serviço
            e escaláveis, para lidar com volumes crescentes de dados.
          </p>
        </ContentTop>

        <div className="containerButton">
          <Button type="button">Fale Conosco</Button>
        </div>
      </Content>
    </Container>
  );
};
