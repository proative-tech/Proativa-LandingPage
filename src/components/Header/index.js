import logoImg from '../../assets/Logo_home01.png'

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="Logo"/>
        
        <ul>
          <li><a href="" className="cool-link">home</a></li>
          <li><a href="" className="cool-link">quem somos</a></li>
          <li><a href="" className="cool-link">soluções</a></li>
          <li><a href="" className="cool-link">mercados</a></li>
          <li><a href="" className="cool-link">cases</a></li>
          <li><a href="" className="cool-link">carreiras</a></li>
          <li><a href="" className="cool-link">blog</a></li>
          <li><a href="" className="cool-link">Fale conosco</a></li>
        </ul>
      </Content>
    </Container>
  )
}