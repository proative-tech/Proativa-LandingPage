import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Button } from '../../Button';
import { Container, ContainerImg, Content, Header } from './styles';

interface CybersecurityProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const CaseSubHero = ({ children }: CybersecurityProps) => {
  const router = useRouter();

  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight - 700
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
    <Container id="cases-top" visibled={isAnimated}>
      <Content>
        <Header>
          <span>Case Título</span>
          <h1>
            Mais uma explicação mais desenvolvida sobre serviço que será
            oferecido.
          </h1>
          <p>
            Nosso principal objetivo em Governança de TI é alinhar a Tecnologia
            da Informação aos requisitos do negócio, levando em consideração
            soluções que agreguem valor, com garantia de continuidade dos
            serviços.
          </p>
        </Header>
      </Content>
      <ContainerImg modifier={!!children}>
        <img src="/images/cybersecurity.png" alt="proative" />
      </ContainerImg>
    </Container>
  );
};
