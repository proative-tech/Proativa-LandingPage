import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container, Content, Info, ContentTop, ContentBottom } from './styles';

export const ContainerInfoConsul = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerInfosOne');

    const getWindowBottom = window.scrollY + window.innerHeight;
    // const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 300;
    const heightEle = ele.getBoundingClientRect().top + window.scrollY + 100;

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
    <Container visibled={isAnimated} id="containerInfosOne">
      <Content>
        <ContentTop>
          <h2>Com isso, nossos movimentos estão focados em:</h2>
          <div className="row">
            <Info>
              <h3>01</h3>
              <p>
                Promover o posicionamento mais claro e consistente da TI em
                relação às demais áreas da empresa;
              </p>
            </Info>
            <Info>
              <h3>02</h3>
              <p>
                Promover o alinhamento e a priorização das iniciativas de TI com
                a estratégica do negócio;
              </p>
            </Info>
            <Info>
              <h3>03</h3>
              <p>
                Promover o alinhamento da arquitetura de TI, sua infraestrutura
                e aplicações às necessidades do negócio, em termos de presente e
                futuro;
              </p>
            </Info>
          </div>
          <div className="row">
            <Info>
              <h3>04</h3>
              <p>
                Promover a implantação e melhoria dos processos operacionais e
                de gestão necessários para atender aos serviços de TI, conforme
                padrões que atendam às necessidades do negócio;
              </p>
            </Info>
            <Info>
              <h3>05</h3>
              <p>
                Prover a TI da estrutura de processos que possibilite a gestão
                do seu risco e conformidades. TI Impulsionando e colaborando com
                o negócio.
              </p>
            </Info>
          </div>
        </ContentTop>
        <ContentBottom>
          <div className="contentBottomMain">
            <h3>IT Governance Consultancy</h3>
            <p>
              Projetos de ITSM baseados nas melhores praticas globais <br />
              (ITIL- ISO 20000- HDI - COBIT - SCRUM ) para o gerenciamento de
              serviços de TI, entregando processos para a área de infraestrutura
              promovendo qualidade e melhoria contínua.
            </p>
          </div>
          <div className="contentBottomImg">
            <img src="/images/group-1.png" alt="group 1" />
            <img src="/images/group-2.png" alt="group 1" />
          </div>
        </ContentBottom>
      </Content>
    </Container>
  );
};
