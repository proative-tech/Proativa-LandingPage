import { useState } from "react";

import { Container, Content } from "./styles";
import iconArrow from '../../assets/icon-arrow.svg'

import ilustrationMobile from '../../assets/illustration_mobile.svg'
import ilustration from '../../assets/Home02.svg'


export function Home() { 
  const [isMobile, setIsMobile] = useState(0)

  const handleResize = () => {
    if(window.innerWidth <= 490)
      setIsMobile(window.innerWidth)
  }

  window.addEventListener('resize', handleResize);

  return (
    <Container>
      <Content>
        <div className="section-home">
          <section className="contentLeft">
            <h1>Acreditamos no poder dos dados no processo de tomada de decisão</h1>
            <p>
              Organizamos suas informações e facilitamos sua visualização, permitindo
              definições mais precisas e com maior confiança na performance e resultados.
            </p>

            <button className="primary-btn">Conheça nossas soluções</button>
            <button className="second-btn">Fale Conosco</button>
            <br/><br/>

            <div className="containerMediaSociais">
              <span>
                <a href="">Youtube</a>
              </span>

              <span>
                <a href="">linkedln</a>
              </span>
            </div>      
          </section>
          
          <section className="section-ilustration">
            <img src={
              isMobile ? 
              ilustrationMobile :  ilustration
            } alt="Proative"/>
          </section>
        </div>

        <div className="section-next">
          <img src={iconArrow} alt="Icon Arrow" className="iconArrow"/>
        </div>
    </Content>      
  </Container>
  )
}