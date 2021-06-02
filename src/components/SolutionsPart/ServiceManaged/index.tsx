import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { Button } from '../../Button';
import {
  Container,
  ContainerImg,
  Content,
  Header,
  Footer,
  ContainerButton,
} from './styles';

interface ServiceManagedProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const ServiceManaged = ({ children }: ServiceManagedProps) => {
  const router = useRouter();
  const is1920 = useMediaQuery({ minWidth: 1601 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    heightEle = isMobileOrTabled
      ? window.innerHeight - 400
      : window.innerHeight - 300;

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
    <Container id="soluciton-service" visibled={isAnimated}>
      <ContainerImg>
        <img
          src={
            is1920 ? '/images/servicesManaged1920.png' : '/images/teste.jpeg'
          }
          alt="proative"
        />
      </ContainerImg>

      <Content>
        {children ? (
          <Header>{children}</Header>
        ) : (
          <>
            <Header>
              <span>Services Managed</span>
              <h1>
                Imagine sair do seu escritório todos os dias, sabendo que a
                segurança e a continuidade do seu negócio estão em boas mãos?
              </h1>
              <p>
                Os Serviços Gerenciados da Proative fazem exatamente isso - 24
                horas por dia, 7/07. Unindo gestão, inteligência, segurança,
                agilidade e inovação.
              </p>
            </Header>
            <Footer>
              <h3>Maior eficiência</h3>
              <p>
                Aumente a eficiência através de agilidade e precisão na
                identificação de falhas.
              </p>
            </Footer>
            <Footer>
              <h3>Centralizado</h3>
              <p>
                Gerenciamento centralizado e proativo, padronizando processos e
                reduzindo erros operacionais.
              </p>
            </Footer>
            <Footer>
              <h3>Menor Downtime</h3>
              <p>
                Redução do tempo de indisponibilidade dos recursos de missão
                crítica.
              </p>
            </Footer>
            <ContainerButton>
              <Link scroll={false} href="/solucoes/service-manager" passHref>
                <Button type="button">Saiba mais sobre Services Managed</Button>
              </Link>
            </ContainerButton>
          </>
        )}
      </Content>
    </Container>
  );
};
