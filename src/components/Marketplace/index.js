import { Container, Content } from './styles';
import Imagem02 from '../../assets/Imagem02.svg';



export function Marketplace() {
  return(
    <Container>
      <Content>
        <section className="section01">
          <h1>
            Governança de TI impulsionando e colaborando seu negócio.
          </h1>

          <div className="text-item">
            <p>
              Nosso principal objetivo em Governança de TI é alinhar a Tecnologia da Informação
              aos requisitos do negócio, levando em consideração soluções que agreguem valor e 
              qualidade, integradando e automatizando os fluxos de trabalho, com garantia de
              continuidade dos serviços.
            </p>
          </div>
        </section>
        
        <section className="section02">
          <img src={ Imagem02 } alt=""/>
        </section>
        
        <section className="section03">
          
        </section>

        <section className="section04">
          <strong>
              Conheça a Proative
          </strong>

          <div className="text-item">
            <p>
              Caso tenha interesse, é possível saber um pouco mais de quem somos e no que 
              acreditamos assistindo ao nosso vídeo de apresentação.
            </p>
          </div>
        </section>
    
      </Content>
    </Container>
  )
}