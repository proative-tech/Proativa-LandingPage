import { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

import { MenuBurger } from '../Burger';
import { DropdownMenu } from '../Dropdown';

import { Container } from './styles';

export function Nav() {
  const [focusMarket, setFocusMerket] = useState(false);
  const [focusSolutions, setFocusSolutions] = useState(false);
  const [focusPortais, setFocusPortais] = useState(false);

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
            onMouseEnter={() => setFocusSolutions(!focusSolutions)}
            onMouseLeave={() => setFocusSolutions(!focusSolutions)}
          >
            <Link href="/solucoes">SOLUÇÕES</Link>
            {focusSolutions && (
              <DropdownMenu
                links={[
                  { name: 'Todos Soluções', href: '/solucoes' },
                  {
                    name: 'Services Managed',
                    href: '/solucoes/service-manager',
                  },
                  { name: 'Cybersecurity', href: '/solucoes/cybersecurity' },
                  {
                    name: 'Serviços Profissionais',
                    href: '/solucoes/professionals',
                  },
                  { name: 'Consultoria', href: '/solucoes/consultancy' },
                ]}
              />
            )}
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
          <li
            onMouseEnter={() => setFocusPortais(!focusPortais)}
            onMouseLeave={() => setFocusPortais(!focusPortais)}
          >
            <Link href="/">PORTAIS</Link>
            {focusPortais && (
              <DropdownMenu
                links={[
                  { name: 'Clientes', href: '/' },
                  { name: 'Parceiros', href: '/' },
                  { name: 'Colaboradores', href: '/' },
                ]}
              />
            )}
          </li>
        </ul>
      )}
      {isMobileOrTablet && <MenuBurger />}
    </Container>
  );
}
