import {
  Container,
  ContainerContent,
  ContainerImg,
  Content,
  Header,
} from './styles';

export const ContainerEscritorio = () => {
  return (
    <Container>
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
