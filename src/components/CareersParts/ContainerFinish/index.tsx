/* eslint-disable prettier/prettier */
import {  useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import { Container, ContainerTop, ContainerBottom, ContainerInfo, ContainerGoTop } from './styles';

export function ContainerFinish() {
  const isMobile = useMediaQuery({ maxWidth: 490 });
  const isMobileUltra = useMediaQuery({ minWidth: 1920 });
  const def = useMediaQuery({ minWidth: 491, maxWidth: 1919 });
  const [isAnimated, setIsAnimated] = useState(false);
  const [isAnimatedList, setIsAnimatedList] = useState(false);

  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerFinishMain');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele.getBoundingClientRect().bottom + window.scrollY - 1400;

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
      <ContainerTop >
      <a href="https://vemserproative.solides.jobs/" >
        <h1>
          <p className="tag">#vemserproative</p>
        </h1>
        </a>
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
      <ContainerInfo id="infosList">
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
        <Link to="headerScroll" smooth duration={700} style={{ display: 'inline-block', zIndex: 20, width: 60, height: 40, cursor: 'pointer' }}>
          <img src="/images/arrow-go-top.svg" alt="seta para cima" />
        </Link>
      </ContainerGoTop>
    </Container>
  );
}
