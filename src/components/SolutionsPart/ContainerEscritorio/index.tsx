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
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight + 2400
      : window.innerHeight + 1500;

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
