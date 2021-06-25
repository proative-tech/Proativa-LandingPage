import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container, Content, Info } from './styles';

export const ContainerInfosOne = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerInfosOne');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 1000;

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
    <Container visibled={isAnimated} id="containerInfosOne">
      <Content>
        <Info>
          <div className="containerImg">
            <img src="/images/1-icon-inf.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Dashboards Intuitivos</p>
          <p>
            Dashboards personalizados para monitoramento correlacionando o
            negócio com a infraestrutura.
          </p>
        </Info>
        <Info>
          <div className="containerImg">
            <img src="/images/2-icon-inf.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Predição</p>
          <p>Monitoramento e Inteligeência como Preditores</p>
        </Info>
        <Info>
          <div className="containerImg">
            <img src="/images/3-icon-inf.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Observabilidade</p>
          <p>
            Tenha visibilidade completa de seus aplicativos, sistemas, APIs,
            microsserviços, rede, infraestrutura.
          </p>
        </Info>
      </Content>
    </Container>
  );
};
