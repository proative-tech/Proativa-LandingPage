import { Container, Content } from "./styles";
import foguete from '../../assets/01_foguete_icon01.svg'
import relogio from '../../assets/02_relogioicon.svg'
import alvo from '../../assets/03_Alvo.svg'
import lampada from '../../assets/04_Lampada.svg'

export function About() {
  return (
    <Container>
      <Content>
        <section className="section-main">
          <div className="text-main">
            <p>Nosso propósito</p>
            <h1>Nós transparecemos </h1>
            <strong>informação.</strong>
          </div>
        </section>

        <section className="section-item">
          <div className="item">
            <img src={ foguete } alt="icon1"/>
            <div>
              <p><strong>Seja proativo</strong></p>
              <p>Indentifique os problemas antes que os seus usuários e se antecipe nas soluções.</p>
            </div>
          </div>

          <div className="item">
            <img src={ relogio } alt="icon2"/>
            <div>
              <p><strong>Diminua o Downtime</strong></p>
              <p>Seja rápido e preciso na detecção e solução dos problemas dos seus ambientes.</p>
            </div>
          </div>

          <div className="item">
            <img src={ alvo } alt="icon3"/>
            <div>
              <p><strong>Maior produtividade</strong></p>
              <p>Automatize sistemas e diminua incidência de problemas recorrentes.</p>
            </div>
          </div>

          <div className="item">
            <img src={ lampada } alt="icon4"/>
            <div>
              <p><strong>Melhore sua Gestão</strong></p>
              <p>Tenha informações precisas para medir e melhorar o desempenho do seu negócio em tempo real.</p>
            </div>
          </div>

          
        </section>
      
        <section className="section-line">
          <hr/>
        </section>

        
      </Content>
    </Container>
    
  )
}