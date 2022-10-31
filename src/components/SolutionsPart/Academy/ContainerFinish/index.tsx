/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import {  useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { FaArrowRight } from 'react-icons/fa';
import { ButtonText } from "../../ButtonText";

import { Container,ContainerButton, ContainerTop, ContainerBottom, ContainerInfo } from './styles';



export function ContainerFinish() {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 490 });
  const isMobileUltra = useMediaQuery({ minWidth: 1920 });
  const def = useMediaQuery({ minWidth: 491, maxWidth: 1919 });
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimatedList, setIsAnimatedList] = useState(false);

  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });

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
            href="https://vemserproative.solides.jobs/"
          />
        </ContainerButton>
      </ContainerTop>

    </Container>
  );
}
