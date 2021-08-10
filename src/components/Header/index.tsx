/* eslint-disable react/require-default-props */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Nav } from './Nav';

import { Container, Content, Both } from './styles';

export interface HeaderProps {
  noPaddingBottom?: boolean;
  blogAbsolute?: boolean;
  bgColor?: string;
  noFixed?: boolean;
  bgChangeScroll?: boolean;
}

export function Header({
  noPaddingBottom = false,
  blogAbsolute = false,
  noFixed = false,
  bgColor,
}: HeaderProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const getWindowBottom = window.scrollY > 20;

    if (getWindowBottom) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container
        bgChangeScroll={isAnimated}
        noFixed={noFixed}
        bgColor={bgColor}
      >
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
