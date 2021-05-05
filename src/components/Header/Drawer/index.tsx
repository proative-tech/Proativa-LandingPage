import Image from 'next/image';
import Link from 'next/link';

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
            <Link href="/" passHref>
              QUEM SOMOS
            </Link>
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
            <Link href="/" passHref>
              CARREIRAS
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
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
