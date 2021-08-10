/* eslint-disable react/require-default-props */
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Content, Info } from './styles';

type Props = {
  infos?: any[];
};

export const ContainerInfosTwo = ({ infos = [] }: Props) => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerInfosTow');

    const getWindowBottom = window.scrollY + window.innerHeight;
    // const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 700;
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
    <Container visibled={isAnimated} id="containerInfosTow">
      {infos.length > 0 ? (
        <Content>
          <Info>
            <h1>01.</h1>
            <h3>{infos[0].title}</h3>
            <p>{infos[0].content}</p>
          </Info>
          <Info>
            <h1>02.</h1>
            <h3>{infos[1].title}</h3>
            <p>{infos[1].content}</p>
          </Info>
          <Info>
            <h1>03.</h1>
            <h3>{infos[2].title}</h3>
            <p>{infos[2].content}</p>
          </Info>
          <Info>
            <h1>04.</h1>
            <h3>{infos[3].title}</h3>
            <p>{infos[3].content}</p>
          </Info>
        </Content>
      ) : (
        <Content>
          <Info>
            <h1>01.</h1>
            <h3>Command Center 24x7</h3>
            <p>
              Monitoração e Observabilidade para toda camada de infraestrutura,
              IOT, aplicações, operações, processos de negócio, segurança da
              informação, automação, melhor experiência e gestão para o espaço
              de trabalho digital com mais controle, menos risco e complexidade.
            </p>
          </Info>
          <Info>
            <h1>02.</h1>
            <h3>Service Desk</h3>
            <p>
              Centralizamos todas as necessidades dos nossos clientes em relação
              a tecnologia da informação em um só lugar, oferecendo o suporte
              técnico na área, mas também um auxílio estratégico, com
              especialistas, realizando tanto o atendimento de 1 nível como o de
              2 nível.
            </p>
          </Info>
          <Info>
            <h1>03.</h1>
            <h3>Field Services</h3>
            <p>
              Atendimento de campo especializado de conectividade, serviços de
              TI, projeto de cabeamento estruturado para um novo lançamento ou
              atualização de escritório. Nosso time de field garante que todas
              as correções ou implementações estejam alinhadas com suas
              necessidades mais amplas de infraestrutura e segurança. Temos uma
              rede nacional de profissionais qualificados com rápido tempo de
              resposta.
            </p>
          </Info>
          <Info>
            <h1>04.</h1>
            <h3>DevOps</h3>
            <p>
              DevOps as a Service para seu fluxo de valor de ponta a ponta.
              Otimize a entrega de software e obtenha melhores resultados de
              negócios.
            </p>
          </Info>
        </Content>
      )}
    </Container>
  );
};
