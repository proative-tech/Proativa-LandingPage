import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

interface CybersecurityProps {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
}

export const Cybersecurity = ({ children }: CybersecurityProps) => {
  const router = useRouter();
  const is1920 = useMediaQuery({ minWidth: 1601 });
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);
  const [modifier, setModifier] = useState(!!children);

  const handleScroll = () => {
    let heightEle = window.innerHeight;

    if (modifier) {
      heightEle = isMobileOrTabled
        ? window.innerHeight - 300
        : window.innerHeight - 200;
    } else {
      heightEle = isMobileOrTabled
        ? window.innerHeight + 500
        : window.innerHeight + 300;
    }

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
    <Container visibled={isAnimated} modifier={modifier}>
      <Content>
        {children ? (
          <Header>{children}</Header>
        ) : (
          <>
            <Header>
              <span>Cybersecurity</span>
              <h1>
                Manter a segurança cibernética em um cenário de ameaças em
                constante evolução é um desafio para todas as organizações.
              </h1>
              <p>
                Acompanhe as mudanças do mercado nos riscos de segurança com o
                Cybersecurity da Proative, com análise de riscos, previnindo
                ataques e protegendo a integridade dos dados da sua empresa e
                dos seus clientes.
              </p>
            </Header>
            <Footer>
              <h3>Descubra</h3>
              <p>
                Onde os dados residem: nuvem, email, endpoints e armazenamento.
              </p>
            </Footer>
            <Footer>
              <h3>Monitore</h3>
              <p>
                Como os dados estão sendo usados dentro e fora da rede
                corporativa.
              </p>
            </Footer>
            <Footer>
              <h3>Proteja</h3>
              <p>Os dados de serem expostos ou roubados, em tempo real.</p>
            </Footer>
            <ContainerButton>
              <Link scroll={false} href="/solucoes/cybersecurity" passHref>
                <Button type="button">Saiba mais sobre Cybersecurity</Button>
              </Link>
            </ContainerButton>
          </>
        )}
      </Content>
      <ContainerImg modifier={!!children}>
        <img
          src={is1920 ? '/images/cyber1920.png' : '/images/teste2.png'}
          alt="proative"
        />
      </ContainerImg>
    </Container>
  );
};
