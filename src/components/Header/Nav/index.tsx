import { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import { MenuBurger } from '../Burger';
import { DropdownMenu } from '../Dropdown';

import { Container } from './styles';

export function Nav() {
  const [focusMarket, setFocusMerket] = useState(false);

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
          <li
          // onMouseEnter={() => setFocusMerket(!focusMarket)}
          // onMouseLeave={() => setFocusMerket(!focusMarket)}
          >
            <Link href="/solucoes">SOLUÇÕES</Link>
            {/* {focusMarket && (
              <DropdownMenu
                links={[
                  { name: 'Todos Mercados', href: '/mercados' },
                  { name: 'Logística', href: '/mercados' },
                  { name: 'Health And Care', href: '/mercados' },
                  { name: 'Contrução Civil', href: '/mercados' },
                  { name: 'Financeiro', href: '/mercados' },
                  { name: 'Outros', href: '/mercados' },
                ]}
              />
            )} */}
          </li>
          <li
            onMouseEnter={() => setFocusMerket(!focusMarket)}
            onMouseLeave={() => setFocusMerket(!focusMarket)}
          >
            <Link href="/mercados">MERCADOS</Link>
            {focusMarket && (
              <DropdownMenu
                links={[
                  { name: 'Todos Mercados', href: '/mercados' },
                  { name: 'Logística', href: '/mercados' },
                  { name: 'Health And Care', href: '/mercados' },
                  { name: 'Contrução Civil', href: '/mercados' },
                  { name: 'Financeiro', href: '/mercados' },
                  { name: 'Outros', href: '/mercados' },
                ]}
              />
            )}
          </li>
          <li>
            <Link href="/cases">CASES</Link>
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
