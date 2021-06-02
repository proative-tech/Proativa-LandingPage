import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';
import {
  Container,
  ContainerImg,
  Content,
  Header,
  Footer,
  ContainerButton,
} from './styles';

export const ContainerConsultoria = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight + 1500
      : window.innerHeight + 1000;

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
          <span>Consultoria</span>
          <h1>
            Identificamos suas necessidades e ajudamos a criar, estruturar e
            manter os procedimentos adequados para sua empresa.
          </h1>
          <p>
            Somos o parceiro estratégico ideal para suas necessidades de
            governança de TI e Qualidade. Atendemos todos os portes e segmentos.
          </p>
        </Header>
        <Footer>
          <h3>Governança de TI</h3>
          <p>
            Lorem ipsum dolore. Lorem ipsum dolore.Lorem ipsum dolore. Lorem
            ipsum dolore. Lorem ipsum dolore.
          </p>
        </Footer>
        <Footer>
          <h3>Controle de Qualidade</h3>
          <p>
            Lorem ipsum dolore. Lorem ipsum dolore.Lorem ipsum dolore. Lorem
            ipsum dolore. Lorem ipsum dolore.
          </p>
        </Footer>
        <Footer>
          <h3>Reports BI</h3>
          <p>
            Lorem ipsum dolore. Lorem ipsum dolore.Lorem ipsum dolore. Lorem
            ipsum dolore. Lorem ipsum dolore.
          </p>
        </Footer>
        <Footer>
          <h3>Reports SLAM</h3>
          <p>Os dados de serem expostos ou roubados, em tempo real.</p>
        </Footer>
      </Content>
      <ContainerImg>
        <img src="/images/search-img.png" alt="proative" />
      </ContainerImg>
    </Container>
  );
};
