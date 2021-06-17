/* eslint-disable react/require-default-props */
import Link from 'next/link';
import Image from 'next/image';

import { Nav } from './Nav';

import { Container, Content, Both } from './styles';

export interface HeaderProps {
  noPaddingBottom?: boolean;
  blogAbsolute?: boolean;
  bgColor?: string;
  noFixed?: boolean;
}

export function Header({
  noPaddingBottom = false,
  blogAbsolute = false,
  noFixed = false,
  bgColor,
}: HeaderProps) {
  return (
    <>
      <Container noFixed={noFixed} bgColor={bgColor}>
        <Content noPaddingBottom={noPaddingBottom} blogAbsolute={blogAbsolute}>
          <h1 style={{ cursor: 'pointer' }}>
            <Link href="/" passHref>
              <Image src="/images/logo.svg" width={168} height={67} />
            </Link>
          </h1>
          <Nav />
        </Content>
      </Container>

      {!noFixed && <Both id="headerScroll" />}
    </>
  );
}
