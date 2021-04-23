import { Container, Content } from "./styles";

export function About() {
  return (
    <Container>
      <Content>
        <section className="section-main">
          <div>
            <p>Nosso propósito</p>
            <h1>Nós transparecemos </h1>
            <strong>informação.</strong>
          </div>
        </section>

        <section className="section-item">
          <div>
            <img src="" alt="icon1"/>
            <p><strong>Seja proativo</strong></p>
            <p>Indentifique os problemas antes que os seus usuários e se antecipe nas soluções.</p>
          </div>

          <div>
            <img src="" alt="icon2"/>
            <p><strong>Diminua o Downtime</strong></p>
            <p>Seja rápido e preciso na detecção e solução dos problemas dos seus ambientes.</p>
          </div>

          <div>
            <img src="" alt="icon3"/>
            <p><strong>Maior produtividade</strong></p>
            <p>Automatize sistemas e diminua incidência de problemas recorrentes.</p>
          </div>

          <div>
            <img src="" alt="icon4"/>
            <p><strong>Melhore sua Gestão</strong></p>
            <p>Tenha informações precisas para medir e melhorar o desempenho do seu negócio em tempo real.</p>
          </div>

          
        </section>
      
        <section className="section-line">
          <hr/>
        </section>
      </Content>
    </Container>
    
  )
}