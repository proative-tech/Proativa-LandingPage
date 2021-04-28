import { Container, Content } from './styles';
import { CardComments } from '../CardComments';

export function Cases() {
  return (
    <Container>
      <Content>
        <section className="section-main">
          <h3>Cobertura Completa</h3>
          <p>Atendimento em todo território naciona.</p>
        </section>

        <section className="section-item">
          <div  className="iten">
            <h1>+55.00</h1>
            <p>Itens monitorados</p>
          </div>

          <div className="iten">
            <h1>+20.00</h1>
            <p>Devices monitorados</p>
          </div>

          <div className="iten">
            <h1>+25.00</h1>
            <p>Incidentes/mês</p>
          </div>
        </section>

        <section className="section-line">
          <hr/>
        </section>

        <section className="section-client">
          <h3>O que os clientes dizem</h3>
          <p>Sobre os serviços e soluções Proative</p>
        </section>
      
        <section className="section-comentario">
          <CardComments />
          <CardComments />
           
        </section>
      </Content>      
    </Container>
  )
}