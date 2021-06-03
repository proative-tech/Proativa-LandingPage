import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  ContainerContent,
  ContainerImg,
  Content,
  Header,
} from './styles';

export const ContainerEscritorio = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerEscritorio');

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
    <Container visibled={isAnimated} id="containerEscritorio">
      <ContainerContent>
        <ContainerImg>
          <img src="/images/escritorio.png" alt="proative" />
        </ContainerImg>
        <Content>
          <Header>
            <h1>
              Identificamos suas necessidades e ajudamos a criar, estruturar e
              manter os procedimentos adequados para sua empresa.
            </h1>
            <p>
              Somos o parceiro estratégico ideal para suas necessidades de
              governança de TI e Qualidade. Atendemos todos os portes e
              segmentos. Somos o parceiro estratégico ideal para suas
              necessidades de governança de TI e Qualidade. Atendemos todos os
              portes e segmentos.
            </p>
          </Header>
        </Content>
      </ContainerContent>
    </Container>
  );
};
