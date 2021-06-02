import Image from 'next/image';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import { Container, Overlay, Content, ButtonClose, Item } from './styles';

export const DrawerMenu = ({ onCloseDrawer }) => {
  return (
    <Container>
      <Overlay onClick={onCloseDrawer} />

      <Content>
        <ButtonClose>
          <button type="button" onClick={onCloseDrawer}>
            <Image src="/images/x.svg" width={23} height={23} />
          </button>
        </ButtonClose>

        <ul>
          <Item>
            <Link href="/" passHref>
              HOME
            </Link>
          </Item>
          <Item>
            <LinkScroll
              to="about-link"
              duration={700}
              smooth
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onCloseDrawer();
              }}
            >
              QUEM SOMOS
            </LinkScroll>
          </Item>
          <Item>
            <Link href="/solucoes" passHref>
              SOLUÇÕES
            </Link>
          </Item>
          <Item>
            <Link href="/mercados" passHref>
              MARCADOS
            </Link>
          </Item>
          <Item>
            <Link href="/cases" passHref>
              CASES
            </Link>
          </Item>
          <Item>
            <Link href="/carreiras" passHref>
              CARREIRAS
            </Link>
          </Item>
          <Item>
            <Link href="/blog" passHref>
              BLOG
            </Link>
          </Item>
          <Item>
            <Link href="/fale-conosco" passHref>
              FALE CONOSCO
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              PORTAIS
            </Link>
          </Item>
        </ul>
      </Content>
    </Container>
  );
};
