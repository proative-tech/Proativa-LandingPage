/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/require-default-props */
import { useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';

import { Container, ContentTop, Content, Info, Background } from './styles';

export const ContainerInfoAcademy = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerInfosTow');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele?.getBoundingClientRect().top + window.scrollY + 100;

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
      <ContentTop>
        <h2>Trilhas de Conhecimentos</h2>
        <p>
          A Proative Academy conta com 3 trilhas de aprendizagem principais,
          sendo elas:
        </p>
      </ContentTop>

      <Background>
        <img src="/images/trilha.svg" />
      </Background>

      <Content>
        <Info>
          <h1>
            <MdLocationOn color="black" size="75px" />
          </h1>
          <h3>Trilha de Conhecimentos Gerais</h3>
          <p>
            Focada no desenvolvimento profissional e pessoal do colaborador,
            contendo competências técnicas e comportamentais, a depender da
            necessidade de cada profissional;
          </p>
        </Info>
        <Info>
          <h1>
            <MdLocationOn color="black" size="75px" />
          </h1>
          <h3>Trilha de Conhecimentos Específicos</h3>
          <p>
            Focada no desenvolvimento do colaborador em sua área de atuação e
            cliente que atende, contendo competências técnicas de cada área de
            serviços da Proative necessárias para a provisão do serviço para
            cada cliente específico;
          </p>
        </Info>
        <Info>
          <h1>
            <MdLocationOn color="black" size="75px" />
          </h1>
          <h3>Trilha de Conhecimentos Mandatórios</h3>
          <p>
            Contempla os cursos com conteúdo basilares, de caráter ético,
            político, técnico e regulatório, necessários para o conhecimento de
            todo colaborador antes do início de suas atividades na empresa.
          </p>
        </Info>
      </Content>
    </Container>
  );
};
