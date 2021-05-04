import { Container, Content, Info } from './styles';

export const ContainerInfosOne = () => {
  return (
    <Container>
      <Content>
        <Info>
          <div className="containerImg">
            <img src="/images/1-icon-inf.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Dashboards Intuitivos</p>
          <p>
            Dashboards personalizados para monitoramento correlacionando o
            negócio com a infraestrutura.
          </p>
        </Info>
        <Info>
          <div className="containerImg">
            <img src="/images/2-icon-inf.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Predição</p>
          <p>Monitoramento e Inteligeência como Preditores</p>
        </Info>
        <Info>
          <div className="containerImg">
            <img src="/images/3-icon-inf.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Observabilidade</p>
          <p>
            Tenha visibilidade completa de seus aplicativos, sistemas, APIs,
            microsserviços, rede, infraestrutura.
          </p>
        </Info>
      </Content>
    </Container>
  );
};
