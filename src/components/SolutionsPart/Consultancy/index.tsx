import { ReactNode } from 'react';
import { useRouter } from 'next/router';
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

export const Consultancy = ({ children }: CybersecurityProps) => {
  const router = useRouter();

  return (
    <Container>
      <Content>
        {children ? (
          <Header>{children}</Header>
        ) : (
          <>
            <Header>
              <span>Consultoria</span>
              <h1>
                Identificamos suas necessidades e ajudamos a criar, estruturar e
                manter os procedimentos adequados para sua empresa.
              </h1>
              <p>
                Somos o parceiro estratégico ideal para suas necessidades de
                governança de TI e Qualidade. Atendemos todos os portes e
                segmentos.
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

            <ContainerButton>
              <Button
                type="button"
                onClick={() => router.push('/solucoes/consultancy')}
              >
                Saiba mais sobre Consultoria
              </Button>
            </ContainerButton>
          </>
        )}
      </Content>
      <ContainerImg modifier={!!children}>
        <img src="/images/consultancy.png" alt="proative" />
      </ContainerImg>
    </Container>
  );
};
