import { ReactNode } from 'react';
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

  return (
    <Container>
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
              <Button
                type="button"
                onClick={() => router.push('/solucoes/cybersecurity')}
              >
                Saiba mais sobre Cybersecurity
              </Button>
            </ContainerButton>
          </>
        )}
      </Content>
      <ContainerImg modifier={!!children}>
        <img
          src={
            is1920
              ? '/images/cyber1920.png'
              : '/images/teste2.png'
          }
          alt="proative"
        />
      </ContainerImg>
    </Container>
  );
};
