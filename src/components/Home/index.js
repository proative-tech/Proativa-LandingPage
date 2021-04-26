import { Container, Content } from "./styles";
import iconArrow from '../../assets/icon-arrow.svg'
import ilustration from '../../assets/Ilustração_Home01.svg'


export function Home() {
  return (
    <Container>
      <Content>
        <div className="section-home">
          <section>
            <h1>Acreditamos no poder dos dados no processo de tomada de decisão.</h1>
            <p>
              Organizamos suas informações e facilitamos sua visualização, permitindo
              definições mais precisas e com maior confiança na performance e resultados.
            </p>

            <button className="primary-btn">Conheça nossas soluções</button>
            <button className="second-btn">Fale Conosco</button>
            <br/><br/>
            <span>
              <a href="">Facebook</a>
            </span>

            <span>
              <a href="">linkedln</a>
            </span>
          </section>
          
          <section>
            <img src={ ilustration } alt="Proative"/>
          </section>
        </div>

        <div className="section-next">
          <img src={iconArrow} alt="Icon Arrow" className="iconArrow"/>
        </div>
      
    </Content>  
    
    </Container>
  )
}