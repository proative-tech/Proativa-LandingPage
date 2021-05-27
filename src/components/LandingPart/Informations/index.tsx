import { Container, Content, Header, ContainerInfos, Divider } from './styles';

export function Informations() {
  return (
    <Container id="lg-container-info">
      <Content>
        <Header>
          <div>
            <span>Nosso propósito</span>
            <h1>
              Nós transparecemos <br /> <strong>informação.</strong>
            </h1>
          </div>
        </Header>

        <ContainerInfos>
          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/01_foguete.svg" alt="Seja Proativo" />
            </div>
            <p className="title">Cocriamos Valor</p>
            <p>Lentes para gerar valor e potencializar negócios.</p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/02_relogio.svg" alt="Diminua o Downtime" />
            </div>
            <p className="title">Continuidade</p>
            <p>Garantimos a continuidade do seu negócio.</p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/03_alvo.svg" alt="Maior produtividade" />
            </div>
            <p className="title">Gestão e Agilidade</p>
            <p>
              Oferecemos uma experiência única sobre um ciclo de trabalho
              inteligente, ágil e uma gestão centralizada.
            </p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/04_lampada.svg" alt="Melhore sua Gestão" />
            </div>
            <p className="title">Garantimos Qualidade</p>
            <p>
              Cuidamos da sua operação garantindo disponibilidade, segurança e
              qualidade na entrega.
            </p>
          </div>
        </ContainerInfos>

        <Divider />
      </Content>
    </Container>
  );
}
