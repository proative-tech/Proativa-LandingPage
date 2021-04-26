import { Container, Content, Footer } from './styles';
import logo from '../../assets/Logo_home01.png';

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
          <div className="item-comentario">
            <div className="profile">
              <div className="img"></div><br/>
              <strong>Adriano Santos</strong>
              <p>Gestor executivo</p>
            </div>

            <div className="note">
              <p>
               "O que mais nos chamou a atenção foi a transparência e a confiança da empresa.
               Criamos uma relação de comprometimento, ética profissional e com total 
               prioridade no nosso atendimento. Foi isso que mais nos encantou.”
              </p>
            </div>
    
          </div>

          <div className="item-comentario">
            <div className="profile">
              <div className="img"></div><br/>
              <strong>Adriano Santos</strong>
              <p>Gestor executivo</p>
            </div>

            <div className="note">
              <p>
               "O que mais nos chamou a atenção foi a transparência e a confiança da empresa.
               Criamos uma relação de comprometimento, ética profissional e com total 
               prioridade no nosso atendimento. Foi isso que mais nos encantou.”
              </p>
            </div>
    
          </div>
           
        </section>
      </Content>
 
      <Footer>
        <section className="footer">
          <div>
            <img src={ logo } alt=""/>
          </div>

          <div>
            <p>Alameda Araguaia, 2104 – 7º andar</p>
            <p>Conj. 71A</p>
            <p>Alphaville | Barueri</p>
            <p>São Paulo, Brasil</p>
            <p>06455-000</p>
          </div>

          <div>
            <p>+55 11 4130-8800</p>
            <p>contato@proativetec.com.br</p>

            <span>Facebook</span>
            <span>Linkedin</span>

            <p>Olíticas de Privacidade</p>
          </div>
        </section>
      </Footer>
      
    </Container>
  )
}