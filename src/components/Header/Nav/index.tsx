import { useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { Link as LinkScroll } from 'react-scroll';

import { MenuBurger } from '../Burger';
import { DropdownMenu } from '../Dropdown';

import { Container } from './styles';
import { DropdownMenuTwo } from '../DropdownTwo';

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
            <LinkScroll
              to="about-link"
              duration={700}
              smooth
              style={{ cursor: 'pointer' }}
            >
              QUEM SOMOS
            </LinkScroll>
          </li>
          <li
            onMouseEnter={() => setFocusSolutions(!focusSolutions)}
            onMouseLeave={() => setFocusSolutions(!focusSolutions)}
          >
            <Link href="/solucoes">SOLUÇÕES</Link>
            {focusSolutions && (
              <DropdownMenu
                links={[
                  { name: 'Todas Soluções', href: '/solucoes' },
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
              <DropdownMenuTwo
                links={[
                  { name: 'Todos Mercados', to: 'mkt-top', href: '/mercados' },
                  { name: 'Logística', to: 'mkt-logista', href: '/mercados' },
                  {
                    name: 'Health And Care',
                    to: 'mkt-Health',
                    href: '/mercados',
                  },
                  {
                    name: 'Contrução Civil',
                    to: 'mkt-contrucao',
                    href: '/mercados',
                  },
                  {
                    name: 'Financeiro',
                    to: 'mkt-Financeiro',
                    href: '/mercados',
                  },
                  { name: 'Outros', to: 'mkt-Outros', href: '/mercados' },
                ]}
              />
            )}
          </li>
          <li>
            <Link href="/cases">CASES</Link>
          </li>
          <li>
            <Link href="/carreiras">CARREIRAS</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
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
