import { Container, Content } from './styles';
import imgSolution from '../../assets/Home-03.svg';


export function Solution() {
  return (
    <Container>
      <Content>
        <section className="first-section">
          <img src={ imgSolution } alt=""/>
        </section>

        <section className="second-section">
          <strong>Sobre a Proative</strong>
          <h2>Somos uma empresa de <br/> tecnologia especializada em <br/> soluções inovadoras de gerenciamento de informações.</h2>
          
          <div className="text">
            <p>
              Oferecemos soluções de gerenciamento de TI que te possibilitam 
              visualizar seus dados e dispositivos de forma fácil, impulsionando 
              operações e serviços para conectar, integrar e analisar seus indicadores 
              de performance com segurança, agilidade, eficiência e colaboração.
            </p>
          </div>
            <h4>
              História
            </h4>
          <div className="text">  
            <p>
              Desde 2007, a nossa missão tem sido de tornar as operações dos nossos
              clientes mais simples e eficientes, facilitando as tomadas de decisões 
              potencializando o crescimento do negócio. 
            </p>
          </div>
        </section>
        
      </Content>
    </Container>
  )
}