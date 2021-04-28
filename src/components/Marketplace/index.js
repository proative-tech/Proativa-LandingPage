import { Container, Content } from './styles';
import Imagem02 from '../../assets/Imagem02.png';




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
      </Content>
    </Container>
  )
}