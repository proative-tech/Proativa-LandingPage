/* eslint-disable no-extra-boolean-cast */
import { useCallback, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { Link as LinkScroll } from 'react-scroll';

import { MenuBurger } from '../Burger';
import { DropdownMenu } from '../Dropdown';

import { Container } from './styles';
import { DropdownMenuTwo } from '../DropdownTwo';

export function Nav() {
  const [focusMarket, setFocusMerket] = useState(false);
  const [focusSolutions, setFocusSolutions] = useState(false);
  const [focusHome, setFocusHome] = useState(false);
  const [focusPortais, setFocusPortais] = useState(false);

  const isMobileOrTablet = useMediaQuery({ maxWidth: 920 });

  const router = useRouter();

  return (
    <Container>
      {!isMobileOrTablet && (
        <ul>
          <li
            onMouseEnter={() => setFocusHome(!focusHome)}
            onMouseLeave={() => setFocusHome(!focusHome)}
          >
            <Link href="/">HOME</Link>
            {focusHome && (
              <DropdownMenuTwo
                links={[
                  { name: 'Quem somos', href: '/', to: 'about-link' },
                  {
                    name: 'Parceiros',
                    href: '/',
                    to: 'partners-link',
                  },
                  {
                    name: 'Depoimentos',
                    href: '/',
                    to: 'commnets-link',
                  },
                ]}
              />
            )}
          </li>
          <li
            onMouseEnter={() => setFocusSolutions(!focusSolutions)}
            onMouseLeave={() => setFocusSolutions(!focusSolutions)}
          >
            <Link scroll={false} href="/solucoes">
              SOLUÇÕES
            </Link>
            {focusSolutions && (
              <DropdownMenu
                links={[
                  { name: 'Todas Soluções', href: '/solucoes' },
                  {
                    name: 'Managed Services',
                    href: '/solucoes/service-manager',
                  },
                  {
                    name: 'Consulting Services',
                    href: '/solucoes/consultancy',
                  },
                  {
                    name: 'Cyber Security Services',
                    href: '/solucoes/cybersecurity',
                  },
                  {
                    name: 'Professional Services',
                    href: '/solucoes/professionals',
                  },

                  {
                    name: 'RPA',
                    href: '/solucoes/rpa',
                  },
                ]}
              />
            )}
          </li>
          {/* <li
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
          </li> */}
          <li>
            <Link scroll={false} href="/academy">
              ACADEMIA
            </Link>
          </li>
          <li>
            <Link scroll={false} href="/carreiras">
              CARREIRAS
            </Link>
          </li>
          <li>
            <Link scroll href="/blog">
              BLOG
            </Link>
          </li>
          <li>
            <Link scroll={false} href="/fale-conosco">
              FALE CONOSCO
            </Link>
          </li>
          <li
            onMouseEnter={() => setFocusPortais(!focusPortais)}
            onMouseLeave={() => setFocusPortais(!focusPortais)}
          >
            <Link scroll href="/">
              PORTAIS
            </Link>
            {focusPortais && (
              <DropdownMenu
                links={[
                  {
                    name: 'Clientes',
                    href: 'https://portalproativetec.topdesk.net/',
                  },
                  {
                    name: 'Parceiros',
                    href: 'https://portalproativetec.topdesk.net/',
                  },
                  {
                    name: 'Colaboradores',
                    href: 'https://app.expenseon.com/admin/login',
                  },
                  {
                    name: 'Política de Privacidade',
                    href: '/politicas-de-privacidade',
                  },
                  // { name: 'Colaboradores', href: '/' },
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
