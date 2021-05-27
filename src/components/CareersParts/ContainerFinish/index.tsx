/* eslint-disable prettier/prettier */
import { useMediaQuery } from 'react-responsive';


import { Container, ContainerTop, ContainerBottom, ContainerInfo, ContainerGoTop } from './styles';

export function ContainerFinish() {
  const isMobile = useMediaQuery({ maxWidth: 490 });
  const isMobileUltra = useMediaQuery({ minWidth: 1920 });
  const def = useMediaQuery({ minWidth: 491, maxWidth: 1919 });

  return (
    <Container>

      <ContainerTop >
        <p className="tag">#vemserproative</p>
      </ContainerTop>
      <ContainerBottom>
        {(isMobile && !def) && (
          <img
            src="/images/carreiras-ultima-m.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
        {def && (
          <img
            src="/images/carreiras-ultima-1440.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
        {(!def && isMobileUltra) && (
          <img
            src="/images/carreiras-ultima-u.png"
            alt="Imagem de 3 pessoas conversando em pé."
          />
        )}
      </ContainerBottom>
      <ContainerInfo>
        <h1>
          Dez atitude <br /> <strong>Proative</strong>
        </h1>
        <div className="containerMainInfo">
          <ul>
            <li><p>1. Sorria.</p></li>
            <li><p>2. Lidere com exemplo.</p></li>
            <li><p>3. Abrace e conduza mudanças, seja um agente transformador!</p></li>
            <li><p>4. Celebre cada conquista.</p></li>
            <li><p>5. Procure sempre por crescimento</p></li>
            <li><p>6. Seja empático.</p></li>
            <li><p>7. Seja apaixonado e determinado.</p></li>
            <li><p>8. Seja humilde</p></li>
            <li><p>9. Desenvolva um espírito empreendedor.</p></li>
            <li><p>10. Respeite as pessoas e o meio ambiente e faça parte da construção de um mundo melhor.</p></li>
          </ul>
        </div>
      </ContainerInfo>
      <ContainerGoTop>
        <a href="#headerScroll" >
          <img src="/images/arrow-go-top.svg" alt="seta para cima" />
        </a>
      </ContainerGoTop>
    </Container>
  );
}
