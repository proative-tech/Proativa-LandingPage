import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

import { Container, Content } from "./styles";
import { MenuBurger } from '../atoms/burger';

export function Header() {
  return (
    <Container>
        <Content>
          <Link to="/">
            <img src={ logoImg } alt="Logo"/>
          </Link>
          
          <ul>
            <li><Link to="/" className="cool-link">home</Link></li>
            <li><Link to="/" className="cool-link">quem somos</Link></li>
            <li><Link to="/" className="cool-link">soluções</Link></li>
            <li><Link to="/" className="cool-link">mercados</Link></li>
            <li><Link to="/" className="cool-link">cases</Link></li>
            <li><Link to="/" className="cool-link">carreiras</Link></li>
            <li><Link to="/" className="cool-link">blog</Link></li>
            <li><Link to="/" className="cool-link">Fale conosco</Link></li>
          </ul>

          <div className="containerBurger">
            <MenuBurger />
          </div>
        </Content>
    </Container> 
  )
}