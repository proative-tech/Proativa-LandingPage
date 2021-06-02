import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Content, Info } from './styles';

export const ContainerInfosTwo = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight + 1200
      : window.innerHeight + 900;

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
        <Info>
          <h1>01.</h1>
          <h3>Monitoração de Infraestrutura</h3>
          <p>
            Solução completa de monitoramento e gerenciamento para todo o
            ambiente de TI.
          </p>
        </Info>
        <Info>
          <h1>02.</h1>
          <h3>Monitoração e Observabilidade de Aplicações</h3>
          <p>
            Visão completa sobre a experiência do uso das aplicações e
            Microserviços.
          </p>
        </Info>
        <Info>
          <h1>03.</h1>
          <h3>Monitoração de IOT</h3>
          <p>
            Monitore seus dispositivos IoT e serviços de back-end em uma única
            plataforma unificada.
          </p>
        </Info>
        <Info>
          <h1>04.</h1>
          <h3>Monitoração de Processos de Negócios </h3>
          <p>
            Gerenciar os seus indicadores em tempo real garantindo precisão e
            rapidez.
          </p>
        </Info>
      </Content>
    </Container>
  );
};
