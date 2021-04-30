import { Container, Content, Header, ContainerInfos, Divider } from './styles';

export function Informations() {
  return (
    <Container>
      <Content>
        <Header>
          <div>
            <span>Nosso propósito</span>
            <h1>Nós transparecemos <br /> <strong>informação.</strong></h1>
          </div>
        </Header>

        <ContainerInfos>
          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/01_foguete.svg" alt="Seja Proativo"/>
            </div>
            <p className="title">Seja Proativo</p>
            <p>Identifique os problemas antes que os seus usuários e se antecipe nas soluções.</p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/02_relogio.svg" alt="Diminua o Downtime"/>
            </div>
            <p className="title">Diminua o Downtime</p>
            <p>Seja rápido e preciso na detecção e resolução dos problemas do seu ambiente.</p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/03_alvo.svg" alt="Maior produtividade"/>
            </div>
            <p className="title">Maior produtividade</p>
            <p>Automatize sistemas e diminua incidência de problemas recorrentes.</p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/04_lampada.svg" alt="Melhore sua Gestão"/>
            </div>
            <p className="title">Melhore sua Gestão</p>
            <p>Tenha informações precisas para medir e melhorar o desempenho do seu negócio em tempo real.</p>
          </div>
        </ContainerInfos>

        <Divider />
      </Content>
    </Container>
  );
};
