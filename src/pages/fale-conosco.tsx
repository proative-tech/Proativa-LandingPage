import { Header } from '../components/Header';
import { useMediaQuery } from 'react-responsive';
import { Container, Content } from '../styles/pages/LandingPage';
import { Footer } from '../components/Footer';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function Index() {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Container>
        <Header />
        <Content>
          <div className="content__form">
            <h1>Deseja saber mais sobre as nossas soluções?</h1>
            <p>Entre em contato e tire suas dúvidas:</p>
            <form action="">
              <div>
                <Input
                  label="Nome"
                  name="nome"
                  placeholder="ex: mariana Camargo"
                />
              </div>

              <div className="input_line">
                <div className="input_item">
                  <Input
                    label="Empresa"
                    name="nome"
                    placeholder="ex: Proative"
                  />
                </div>

                <div className="input_item">
                  <Input
                    label="Cargo"
                    name="nome"
                    placeholder="ex: Coordenador"
                  />
                </div>
              </div>

              <div>
                <Input
                  label="E-mail"
                  name="nome"
                  placeholder="ex: contato@proativetec.com.br"
                />
              </div>

              <div>
                <label>Mensagem:</label>
                <textarea></textarea>
              </div>

              <div className="contentBtn">
                <Button type="button">Enviar</Button>
              </div>
            </form>
          </div>

          {!isMobileOrTablet && (
            <div className="content__text">
              <strong>Atendimento:</strong>
              <p>De segunda à sexta-feira, das 9h às 18h. +55 11 4130-8800</p>

              <strong>Comercial:</strong>
              <p>contato@proativetec.com.br</p>

              <strong>Endereço: </strong>
              <p>
                Alameda Araguaia, 2104 – 7º andar Conj. 71A <br />
                Alphaville | Barueri <br />
                São Paulo, Brasil <br />
                06455-000
              </p>

              <strong>Política de Privacidade</strong>
              <p>
                Os dados inseridos nessa página serão utilizados apenas para
                solucionar sua dúvida.
              </p>

              <p>Saiba mais sobre nossa política de privacidade.</p>
            </div>
          )}
        </Content>
      </Container>
      <Footer />
    </>
  );
}
