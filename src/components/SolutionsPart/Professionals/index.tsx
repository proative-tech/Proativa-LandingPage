import { Button } from '../../Button';
import {
  Container,
  ContainerImg,
  Content,
  Header,
  ListVant,
  ContainerButton,
} from './styles';

export const Professionals = () => {
  return (
    <Container>
      <ContainerImg>
        <img src="/images/professionals.png" alt="proative" />
      </ContainerImg>
      <Content>
        <Header>
          <span>Serviços Profissionais</span>
          <h1>
            Possuímos profissionais capacitados e certificados para executar as
            atividades críticas do seu ambiente.
          </h1>
          <p>
            Além dos projetos, também provemos serviços residentes, por meio de
            um processo de recrutamento e seleção desenvolvido com agilidade e
            assertividade, com modelo de gestão por SLA e XLA (Service Level
            Agreement e Experience Level Agreement), aderente às melhores
            práticas de Governança de TI, para impulsionar seu negócio.
          </p>
        </Header>
        <ListVant>
          <li>
            <strong>1.</strong> Redução de custos com contratação de
            profissionais.
          </li>
          <li>
            <strong>2.</strong> Rapidez na alocação de profissionais.
          </li>
          <li>
            <strong>3.</strong> Gerenciamento dos serviços através de SLA e XLA
          </li>
          <li>
            <strong>4.</strong> Capacitação Técnica..
          </li>
        </ListVant>
        <ContainerButton>
          <Button type="button">Saiba mais sobre Serviços Profissionais</Button>
        </ContainerButton>
      </Content>
    </Container>
  );
};
