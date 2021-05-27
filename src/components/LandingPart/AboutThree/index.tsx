import { useMediaQuery } from 'react-responsive';
import { Container, ContainerImg, Content, Footer } from './styles';

export const AboutThree = () => {
  const isMobile = useMediaQuery({ maxWidth: 490 });

  return (
    <Container>
      <ContainerImg>
        <img
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
