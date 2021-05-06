import { Container, Content, ContainerLeft, ContainerRight } from './styles';

export const ContainerInformation = () => {
  return (
    <Container>
      <Content>
        <ContainerLeft>
          <div className="containerLeftText">
            <h2>Desafios</h2>
            <p>
              Breve resumo explicativo dos desafios enfrentados nesse mercado e
              algumas características encontradas para gerar proximidade com o
              cliente que lê e provavelmente tem alguma dessas dificuldades.
            </p>
          </div>
          <div className="containerLeftText">
            <h2>Soluções</h2>
            <p>
              Breve resumo explicativo dos desafios enfrentados nesse mercado e
              algumas características encontradas para gerar proximidade com o
              cliente que lê e provavelmente tem alguma dessas dificuldades.
            </p>
          </div>
        </ContainerLeft>
        <ContainerRight>
          <div className="containerRightContent">
            <img src="/images/01_foguete.svg" alt="Seja proativo" />
            <div>
              <p>Seja proativo</p>
              <span>
                Identifique os problemas antes que os seus usuários e se
                antecipe nas soluções.
              </span>
            </div>
          </div>
          <div className="containerRightContent">
            <img src="/images/01_foguete.svg" alt="Seja proativo" />
            <div>
              <p>Seja proativo</p>
              <span>
                Identifique os problemas antes que os seus usuários e se
                antecipe nas soluções.
              </span>
            </div>
          </div>
          <div className="containerRightContent">
            <img src="/images/01_foguete.svg" alt="Seja proativo" />
            <div>
              <p>Seja proativo</p>
              <span>
                Identifique os problemas antes que os seus usuários e se
                antecipe nas soluções.
              </span>
            </div>
          </div>
        </ContainerRight>
      </Content>
    </Container>
  );
};
