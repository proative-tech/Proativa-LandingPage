/* eslint-disable prettier/prettier */
import {  useState, useEffect } from 'react'

import { ButtonText } from "../../SolutionsPart/ButtonText";

import { Container,ContainerButton, ContainerTop, ContainerBottom, ContainerInfo } from './styles';



export function ContainerFinish() {

  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimatedList, setIsAnimatedList] = useState(false);


  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerFinishMain');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele?.getBoundingClientRect().bottom + window.scrollY - 1400;

    // listSelected
    const eleList: Element | any = document.getElementById('infosList');

    const getWindowBottomList = window.scrollY + window.innerHeight;
    const heightEleList = eleList.getBoundingClientRect().bottom + window.scrollY - 600;


    if (!isAnimated && getWindowBottom >= heightEle) {
      setIsAnimated(true);
    }

    if (!isAnimatedList && getWindowBottomList >= heightEleList) {
      setIsAnimatedList(true);
    }
  };



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const ContainerList = document.getElementById(`infosList`)

    return () =>  window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container visibled={isAnimated} visibledList={isAnimatedList} id="containerFinishMain">
      <ContainerBottom>
          <img
            src="/images/academy-multiracial.png"
            alt="multiraciais"
          />
      </ContainerBottom>
      <ContainerInfo id="infosList">
        <h1>
          Vantagens da <br /> <strong>Proative Academy</strong>
        </h1>
        <div className="containerMainInfo">
          <ul>
            <li><p>Engajamento dos colaboradores aos serviços e clientes; </p></li>
            <li><p>Qualificação das equipes;</p></li>
            <li><p>Oportunidade de crescimento técnico e profissional; </p></li>
            <li><p>Inclusão e atualização dos profissionais ao mundo da TI na Era da Transformação Digital; </p></li>
            <li><p>Apoio a inovação e desenvolvimento; </p></li>
            <li><p>Alinhamento dos conhecimentos adquiridos aos valores da empresa;</p></li>
            <li><p>Incentivar a postura de autoconhecimento e autogestão;</p></li>
            <li><p>Potencializar a comunicação interna;</p></li>
            <li><p>Flexibilização dos horários de treinamentos e capacitação;</p></li>
            <li><p>Apoiar no plano de carreira e na retenção de talentos;</p></li>
            <li><p>Gerar valor aos clientes através da realização pessoal e profissional dos colaboradores.</p></li>
          </ul>
        </div>
      </ContainerInfo>

      <ContainerTop >
        <ContainerButton>
          <ButtonText
            label="Conheça a Proative Academy"
            directionArrow="none"
            href=""
          />
        </ContainerButton>
      </ContainerTop>

    </Container>
  );
}
