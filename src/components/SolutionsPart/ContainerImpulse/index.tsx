import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';
import { Container, Content, ContentTop } from './styles';

export const ContainerImpulse = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerImpulse');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 400;

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
    <Container visibled={isAnimated} id="containerImpulse">
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
