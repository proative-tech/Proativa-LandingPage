/* eslint-disable react/require-default-props */
import Link from 'next/link';
import Image from 'next/image';

import { Nav } from './Nav';

import { Container, Content } from './styles';

interface HeaderProps {
  noPaddingBottom?: boolean;
}

export function Header({ noPaddingBottom = false }: HeaderProps) {
  return (
    <Container id="headerScroll">
      <Content noPaddingBottom={noPaddingBottom}>
        <h1>
          <Link href="/" passHref>
            <Image src="/images/logo.svg" width={168} height={67} />
          </Link>
        </h1>

        <Nav />
      </Content>
    </Container>
  );
}
