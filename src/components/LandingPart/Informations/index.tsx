import { useEffect, useState } from 'react';
import { Events } from 'react-scroll';
import { Container, Content, Header, ContainerInfos, Divider } from './styles';

export function Informations() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element = document.getElementById('lg-container-info');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 400;

    if (!isAnimated && getWindowBottom >= heightEle) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container id="lg-container-info" visibled={isAnimated}>
      <Content>
        <Header visibled={isAnimated}>
          <div>
            <span>Nosso propósito</span>
            <h1>
              Nós transparecemos <br /> <strong>informação.</strong>
            </h1>
          </div>
        </Header>

        <ContainerInfos visibled={isAnimated}>
          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/teamidea.svg" alt="Seja Proativo" />
            </div>
            <p className="title">Cocriamos Valor</p>
            <p>Lentes para gerar valor e potencializar negócios.</p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/analise.svg" alt="Diminua o Downtime" />
            </div>
            <p className="title">Continuidade</p>
            <p>Garantimos a continuidade do seu negócio.</p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/preferencias.svg" alt="Maior produtividade" />
            </div>
            <p className="title">Gestão e Agilidade</p>
            <p>
              Oferecemos uma experiência única sobre um ciclo de trabalho
              inteligente, ágil e uma gestão centralizada.
            </p>
          </div>

          <div className="containerInfo">
            <div className="containerImg">
              <img src="/images/medalha.svg" alt="Melhore sua Gestão" />
            </div>
            <p className="title">Garantimos Qualidade</p>
            <p>
              Cuidamos da sua operação garantindo disponibilidade, segurança e
              qualidade na entrega.
            </p>
          </div>
        </ContainerInfos>

        <Divider />
      </Content>
    </Container>
  );
}
