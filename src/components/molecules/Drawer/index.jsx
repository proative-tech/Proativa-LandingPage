import { Link } from 'react-router-dom';

import X from '../../../assets/x.svg';

import { Container, Overlay, Content, ButtonClose, Item } from './styles'

export const DrawerMenu = ({ onCloseDrawer }) => {
    return (
        <Container>
            <Overlay onClick={onCloseDrawer}/>

            <Content>
                <ButtonClose>
                    <button type="button" onClick={onCloseDrawer}>
                        <img src={X} alt="X" />
                    </button>
                </ButtonClose>

                <ul>
                    <Item>
                        <Link to="/">HOME</Link>
                    </Item>
                    <Item>
                        <Link to="/">QUEM SOMOS</Link>
                    </Item>
                    <Item>
                        <Link to="/">SOLUÇÕES</Link>
                    </Item>
                    <Item>
                        <Link to="/">MARCADOS</Link>
                    </Item>
                    <Item>
                        <Link to="/">CASES</Link>
                    </Item>
                    <Item>
                        <Link to="/">CARREIRAS</Link>
                    </Item>
                    <Item>
                    <Link to="/">BLOG</Link>
                    </Item>
                    <Item>
                    <Link to="/">FALE CONOSCO</Link>
                    </Item>
                    <Item>
                    <Link to="/">PORTAIS</Link>
                    </Item>
                </ul>
            </Content>
        </Container>
    )
}