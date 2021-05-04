import { Button } from '../../Button';
import {
  Container,
  ContainerImg,
  Content,
  Header,
  Footer,
  ContainerButton,
} from './styles';

export const ServiceManaged = () => {
  return (
    <Container>
      <ContainerImg>
        <img src="/images/servicemanager.png" alt="proative" />
      </ContainerImg>

      <Content>
        <Header>
          <span>Services Managed</span>
          <h1>
            Imagine sair do seu escritório todos os dias, sabendo que a
            segurança e a continuidade do seu negócio estão em boas mãos?
          </h1>
          <p>
            Os Serviços Gerenciados da Proative fazem exatamente isso - 24 horas
            por dia, 7/07. Unindo gestão, inteligência, segurança, agilidade e
            inovação.
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
          <Button type="button">Saiba mais sobre Services Managed</Button>
        </ContainerButton>
      </Content>
    </Container>
  );
};
