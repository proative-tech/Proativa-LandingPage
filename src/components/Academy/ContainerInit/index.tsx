/* eslint-disable prettier/prettier */
import {  useState, useEffect } from 'react';

import { ContainerImg } from '../../../styles/pages/Solutions';

import { Container, ContainerBottom } from './styles'


export const ContainerInit = () =>{

  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('beginContent');

    const getWindowBottom = window.scrollY + window.innerHeight;
    const heightEle = ele?.getBoundingClientRect().bottom + window.scrollY;

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
    <Container id="beginContent" visibled={isAnimated}>
      <ContainerImg>
        <img src="/images/academy.png" alt="Imagem de 5 pessoas." />
      </ContainerImg>

      <ContainerBottom>
        <h1>
          <p className="tag">Proative Academy</p>
        </h1>

        <div className="containerMain">
          <h1>
            Nós transparecemos <br /> <strong>comprometimento.</strong>
          </h1>
        </div>
      </ContainerBottom>
    </Container>
  );
}
