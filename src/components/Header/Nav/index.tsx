import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import { MenuBurger } from '../Burger';

import { Container } from './styles';

export function Nav() {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 920 });

  return (
    <Container>
      {!isMobileOrTablet && (
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/">QUEM SOMOS</Link>
          </li>
          <li>
            <Link href="/solucoes">SOLUÇÕES</Link>
          </li>
          <li>
            <Link href="/">MERCADOS</Link>
          </li>
          <li>
            <Link href="/">CASES</Link>
          </li>
          <li>
            <Link href="/">CARREIRAS</Link>
          </li>
          <li>
            <Link href="/">BLOG</Link>
          </li>
          <li>
            <Link href="/fale-conosco">FALE CONOSCO</Link>
          </li>
          <li>
            <Link href="/">PORTAIS</Link>
          </li>
        </ul>
      )}
      {isMobileOrTablet && <MenuBurger />}
    </Container>
  );
}
